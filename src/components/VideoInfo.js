import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../utils/appSlice";
import { CommentContainer } from "./comments/CommentContainer";
import LiveChat from "./LiveChat";
import LifeChat from "./LiveChat";

const VideoInfo = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="flex flex-col w-full">
    <div className="p-2 flex">
      <div>
      <iframe
        width="950"
        height="534"
        src={"https://www.youtube.com/embed/"+params.get('v')}
        title="Callback Hell | Ep  01 Season 02 - Namaste JavaScript"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
      </div>
    <CommentContainer/>
    </div>
  );
};

export default VideoInfo;
