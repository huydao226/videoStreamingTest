import { VideoCard, Sidebar } from "../../components";
import { useServices } from "../../context";
import { useParams } from "react-router-dom";

const MyPlaylistPage = () => {
  const { playlistId } = useParams();
  const { state } = useServices();
  const currentPlaylist = state.playlists.find(
    (item) => item._id === playlistId
  );

  return (
    <div className="library-home-page">
        <Sidebar />
      <div className="main-content-page">
        <div className="menu-bar">
          <h2 className="page-title">{currentPlaylist.title}</h2>
        </div>
        <div className="container-videos">
          {currentPlaylist.videos.map((element) => {
            return (
              <VideoCard
                key={element.id}
                id={element.id}
                title={element.title}
                location={"playlist"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { MyPlaylistPage };