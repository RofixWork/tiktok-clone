import { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import { FaPlay } from "react-icons/fa";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState(true);
  const runVideo = () => {
    if (videoState) {
      videoRef.current.play();
      setVideoState(false);
    } else {
      videoRef.current.pause();
      setVideoState(true);
    }
  };
  return (
    <div className="video__section">
      <video ref={videoRef} onClick={runVideo} loop src={url}></video>

      {videoState ? (
        <FaPlay
          onClick={runVideo}
          color="white"
          size={50}
          className="icon__play"
        />
      ) : null}

      <VideoFooter
        videoState={videoState}
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
