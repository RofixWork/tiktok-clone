import { useState } from "react";
import "./VideoSidebar.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
const VideoSidebar = ({ likes, messages, shares }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="video__sidebar">
      <div className="video__sidebar__icons">
        {liked ? (
          <AiFillHeart size={30} onClick={() => setLiked(false)} />
        ) : (
          <AiOutlineHeart size={30} onClick={() => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="video__sidebar__icons">
        <MdOutlineComment size={30} />
        <p>{messages}</p>
      </div>
      <div className="video__sidebar__icons">
        <BsShareFill size={30} />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
