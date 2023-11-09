import { VideoCard, Sidebar } from "../../components";
import { useServices } from "../../context";

const WatchLaterPage = () => {
  const { state } = useServices();
  return (
    <div className="library-home-page">
        <Sidebar />
      <div className="main-content-page">
        <div className="menu-bar">
          <h2 className="page-title">Watch Later</h2>
        </div>
        <div className="container-videos">
          {state.watchlater.length > 0 ? (
            state.watchlater.map((element) => {
              return (
                <VideoCard
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  location={"watchLater"}
                />
              );
            })
          ) : (
            <div className="logout-content">
              <h2 className="h2">No videos added to watch later</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { WatchLaterPage };