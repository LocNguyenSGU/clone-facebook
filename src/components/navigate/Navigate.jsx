import React from "react";
import { NavLink } from "react-router-dom";
import HomeIconSolid from "../../asset/icons/HomeIconSolid";
import VideoIcon from "../../asset/icons/VideoIcon";
import MarketPlaceIcon from "../../asset/icons/MarketPlaceIcon";
import GroupIcon from "../../asset/icons/GroupIcon";
import GamingIcon from "../../asset/icons/GamingIcon";
import GroupIconSolid from "../../asset/icons/GroupIconSolid";
import HomeIcon from "../../asset/icons/HomeIcon";
import VideoIconSolid from "../../asset/icons/VideoIconSolid";
const Navigate = () => {
  return (
    <>
      <div className="navigate mr-[109px]">
        <ul className="list-item-nav flex items-center gap-2 justify-center content-center">
          <div className="item-block relative">
            <NavLink to="/">
              <li className="nav-item text-center w-28 h-10 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
                <span className="icon-nomal">
                  <HomeIcon></HomeIcon>
                </span>
                {/* <HomeIconSolid></HomeIconSolid> */}
                <span className="icon-solid hidden">
                  <HomeIconSolid></HomeIconSolid>
                </span>
              </li>
            </NavLink>
            <div className="w-full rounded-sm h-[3px] bg-blue-600 absolute -bottom-2 left-0 hidden"></div>
          </div>

          <div className="item-block relative">
            <NavLink to="/video">
              <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
                <span className="icon-nomal">
                  <VideoIcon></VideoIcon>
                </span>
                <span className="icon-solid hidden">
                  <VideoIconSolid></VideoIconSolid>
                </span>
              </li>
            </NavLink>
            <div className="w-full rounded-sm h-[3px] bg-blue-600 absolute -bottom-1 left-0 hidden"></div>
          </div>

          <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
            <MarketPlaceIcon></MarketPlaceIcon>
          </li>

          <div className="item-block relative">
            <NavLink to="/group">
              <li className="nav-item  text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
                <span className="icon-nomal">
                  <GroupIcon></GroupIcon>
                </span>
                <span className="icon-solid hidden">
                  <GroupIconSolid></GroupIconSolid>
                </span>
              </li>
            </NavLink>
            <div className="w-full rounded-sm h-[3px] bg-blue-600 absolute -bottom-1 left-0 hidden"></div>
          </div>

          <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
            <GamingIcon></GamingIcon>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigate;
