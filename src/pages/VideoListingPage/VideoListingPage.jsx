import "../VideoListingPage/VideoListingPage.css";
import { CategoryChips, VideoCard, Loader, Sidebar } from "../../components";
import { useData } from "../../context";
import { useEffect } from "react";

const VideoListingPage = () => {
  const { videoLoader, videos, videoDispatch, searchTerm } = useData();

  useEffect(() => {
    videoDispatch({
      type: "DISPLAY_LOADER",
      payload: { videoLoader: true },
    });
    const timeoutInterval = setTimeout(() => {
      videoDispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false },
      });
    }, 1000);
    return () => {
      videoDispatch({
        type: "DISPLAY_LOADER",
        payload: { videoLoader: false },
      });
      clearInterval(timeoutInterval);
    };
  }, [videoDispatch]);

  return (
    <div className="library-home-page">
        <Sidebar />
      <div className="main-content-page video-listing-page">
        {videoLoader ? (
          <Loader />
        ) : (
          <div>
            <CategoryChips />
            <div className="menu-bar">
              <h2 className="page-title">Trending Videos</h2>
            </div>
            <div className="container-videos">
              {videos
                .filter((item) => {
                  if (searchTerm === "") {
                    return item;
                  } else if (
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map(({ _id, title, category }) => {
                  return (
                    <VideoCard
                      key={_id}
                      id={_id}
                      title={title}
                      category={category}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { VideoListingPage };