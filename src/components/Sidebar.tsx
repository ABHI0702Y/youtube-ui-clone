import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm } from "../store";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.youtubeApp.sidebarOpen);

  if (!sidebarOpen) return null;

  const handleCategorySearch = (term: string) => {
    dispatch(changeSearchTerm(term));
    navigate("/search");
  };

  const mainLinks = [
    { icon: <MdHomeFilled className="text-xl" />, name: "Home", path: "/" },
    { icon: <FaRegCompass className="text-xl" />, name: "Explore", path: "/search" },
    { icon: <MdOutlineSlowMotionVideo className="text-xl" />, name: "Shorts", path: null },
    { icon: <MdSubscriptions className="text-xl" />, name: "Subscriptions", path: null },
  ];

  const secondaryLinks = [
    { icon: <MdOutlineVideoLibrary className="text-xl" />, name: "Library" },
    { icon: <MdHistory className="text-xl" />, name: "History" },
    { icon: <MdOutlineSmartDisplay className="text-xl" />, name: "Your Videos" },
    { icon: <MdOutlineWatchLater className="text-xl" />, name: "Watch Later" },
    { icon: <MdThumbUpOffAlt className="text-xl" />, name: "Liked Videos" },
  ];

  const subscriptionLinks = [
    { icon: <TbMusic className="text-xl" />, name: "Music", term: "music" },
    { icon: <MdOutlineSportsVolleyball className="text-xl" />, name: "Sport", term: "sports" },
    { icon: <TbDeviceGamepad2 className="text-xl" />, name: "Gaming", term: "gaming" },
    { icon: <GiFilmStrip className="text-xl" />, name: "Films", term: "films" },
  ];

  const helpLinks = [
    { icon: <MdSettings className="text-xl" />, name: "Settings" },
    { icon: <MdOutlinedFlag className="text-xl" />, name: "Report history" },
    { icon: <MdOutlineHelpOutline className="text-xl" />, name: "Help" },
    { icon: <MdOutlineFeedback className="text-xl" />, name: "Send feedback" },
  ];

  const textLinks = [
    ["About", "Copyright", "Contact us"],
    ["Terms", "Privacy", "Policy & Safety"],
  ];

  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name, path }) => {
          const isActive = path === "/" ? location.pathname === "/" : location.pathname === path;
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 cursor-pointer ${isActive ? "bg-slate-600" : ""}`}
            >
              {path ? (
                <Link to={path} className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </Link>
              ) : (
                <span
                  className="flex items-center gap-5"
                  title="Sign in to access"
                  onClick={() => alert(`${name} requires sign in`)}
                >
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="pl-6 py-3 hover:bg-zinc-600 cursor-pointer"
            title="Sign in to access"
            onClick={() => alert(`${name} requires sign in`)}
          >
            <span className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name, term }) => (
          <li
            key={name}
            className="pl-6 py-3 hover:bg-zinc-600 cursor-pointer"
            onClick={() => handleCategorySearch(term)}
          >
            <span className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="pl-6 py-3 hover:bg-zinc-600 cursor-pointer"
            title={name}
          >
            <span className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => (
          <li key={name} className="cursor-pointer hover:text-white">{name}</li>
        ))}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => (
          <li key={name} className="cursor-pointer hover:text-white">{name}</li>
        ))}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2024 Google</span>
      <br />
    </div>
  );
}
