import "../PlaylistListingPage/PlaylistListingPage.css";
import { PlaylistCard, PlaylistForm, Sidebar } from "../../components";
import { useState } from "react";
import { useServices } from "../../context";

const PlaylistListingPage = () => {
  const [show, setShow] = useState(false);
  const { state } = useServices();

  return (
    <div className="library-home-page">
        <Sidebar />
      <PlaylistForm show={show} onClose={() => setShow(false)} />
      <div className={show ? "modal-background-page" : ""}>
        <div className="main-content-page">
        <div className="menu-bar">
          <h2 className="page-title">My Playlists</h2>
          <div>
            <button
              className="btn btn-primary-solid"
              onClick={() => setShow(true)}
            >
              Add Playlist
            </button>
          </div>
        </div>
          <div className="container-videos">
            {state.playlists.length > 0 ? (
              state.playlists.map((element) => {
                return <PlaylistCard key={element._id} playlist={element} />;
              })
            ) : (
              <div className="logout-content">
                <h2 className="h2">No playlists added</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistListingPage };