import React from "react";
import { RecommendedVideos } from "../Types";
import { Link } from "react-router-dom";

export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex gap-3">
      <div className="relative min-w-fit">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-24 w-40"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <span className="line-clamp-2">
            {data.videoTitle}
          </span>
        </h4>
        <div className="text-xs text-grap-400">
          <div>
            <span className="hover:text-white">
              {data.channelInfo.name}
            </span>
          </div>
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
