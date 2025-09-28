import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../Redux/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  });

  return (
    <div className="m-1 w-full">
      <div className="flex w-full h-[70vh]">
        <div className="flex-[2]">
          <iframe
            className="h-full w-full rounded-lg"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-[1] ml-1"><LiveChatContainer /></div>
      </div>
      <div className="">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watch;
