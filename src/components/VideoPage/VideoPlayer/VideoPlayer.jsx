import "../css/VideoPage.css";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ id, title }) => {
  return (
    <div className="video-player-container">
      <h2 className="h2">Demo</h2>
      <div className="video-player">
      <iframe src="https://drive.google.com/file/d/1rh-oYJiaB12zHdXDf6bZNauHcxXpCPy-/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>
    </div>
  );
};

export { VideoPlayer };