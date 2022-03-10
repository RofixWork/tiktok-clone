import React from "react";
import "./VideoFooter.css";
import { IoMdMusicalNote } from "react-icons/io";
import { BsDisc } from "react-icons/bs";
import Ticker from "react-ticker";
const VideoFooter = ({ videoState, channel, description, song }) => {
  return (
    <div className="video__footer">
      <h3>@{channel}</h3>
      <p>{description}</p>
      <div className="video__footer__ticker">
        <IoMdMusicalNote size={23} />
        <Ticker mode="smooth">
          {() => (
            <>
              <p>{song}</p>
            </>
          )}
        </Ticker>
      </div>
      <div>
        <BsDisc
          className={`video__disc ${!videoState ? "animation" : null} `}
        />
      </div>
    </div>
  );
};

export default VideoFooter;
