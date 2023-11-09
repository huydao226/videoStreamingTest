import "../VideoCard/VideoCard.css";
import { Link } from "react-router-dom";
import { useToast } from "../../custom-hooks/useToast";
import { useAuth, useServices } from "../../context";
import { addVideoToHistoryOfUserService } from "../../services";
import { SubmenuModal } from "../modals/Submenu-modal/Submenu-modal";
import { useState } from "react";

const VideoCard = ({ id, title, location }) => {
  const { showToast } = useToast();
  const { isAuthorized, authToken } = useAuth();
  const { dispatch, handleLikedVideos, state } = useServices();
  const [showSubMenus, setShowSubMenus] = useState(false);

  const findCurrentVideo = state.likes.find((item) => item.id === id);
  const isVideoExistsInLiked = findCurrentVideo === undefined ? false : true;

  const addViewedVideoToHistory = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { history },
        } = await addVideoToHistoryOfUserService(authToken, { id, title });
        dispatch({ type: "MANAGE_HISTORY", payload: history });
      } catch (error) {
        console.error("history error", error);
      }
    }
  };
  return (
    <div className="container-video-card">
      <div>
      <Link to={`/videopage/${id}`}>
          <img
            src={`https://i.ytimg.com/vi/${id}/0.jpg`}
            alt={`${title} thumbnail`}
            className="video-thumbnail"
            onClick={() => addViewedVideoToHistory()}
          />
        </Link>
        <div>
          <i
            className="material-icons icon"
            onClick={() => handleLikedVideos({ id, title })}
          >
            {isVideoExistsInLiked ? "favorite" : "favorite_border"}
          </i>
        </div>
        
      </div>
      <div className="video-description">
        <div className="video-title">
          <Link className="link-video" to={`/videopage/${id}`}>
            {title}
          </Link>
          <button
            className="material-icons hamburger"
            onClick={() => setShowSubMenus(true)}
          >
            more_vert
          </button>
          <div className="container-modal-opt">
            <SubmenuModal
              showSubMenus={showSubMenus}
              onClosingSubMenus={() => setShowSubMenus(false)}
              id={id}
              title={title}
              location={location}
            />
          </div>
        </div>
        <div className="video-details">1.2M Views | 4 hours ago</div>
      </div>
      <Link to={`/videopage/${id}`}>
        {/* <div className="video-cta">
          <button className="btn-text text-bold">Watch Now</button>
        </div> */}
      </Link>
    </div>
  );
};

export { VideoCard };