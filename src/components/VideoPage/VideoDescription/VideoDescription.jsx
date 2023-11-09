import "../css/VideoPage.css";

const VideoDescription = ({ description }) => {
  return (
    <div className="container-description">
      <h4 className="h4 video-heading">Description</h4>
      <div className="video-description-play">This is the demo for video streaming</div>
    </div>
  );
};

export { VideoDescription };