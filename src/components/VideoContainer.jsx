import { useEffect, useState } from "react";
import { templateList, YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import TemplateButton from "./TemplateButton";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const fetchVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    setVideoList(jsonData.items);
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div>
      <div className="flex gap-2 m-3 items-center justify-center">
        {
          templateList.map((template) => <TemplateButton key={template} btnText={template} />)
        }
      </div>
      <div className="flex flex-wrap gap-4 m-3 items-center justify-center">
        {videoList.map((video) => (
          <Link key={video.id} to={`/watch?v=`+video.id}><VideoCard videoData={video} /></Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
