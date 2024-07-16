import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIconSolid from "../../asset/icons/HomeIconSolid";
import VideoIcon from '../../asset/icons/VideoIcon';
import MarketPlaceIcon from '../../asset/icons/MarketPlaceIcon';
import GroupIcon from '../../asset/icons/GroupIcon';
import GamingIcon from '../../asset/icons/GamingIcon';
const Navigate = () => {
    return (
        <>
               <div className="navigate mr-[109px]">
          <ul className="list-item-nav flex items-center gap-2 justify-center content-center">
            <div className="item-block relative">
              <NavLink to="/">
                <li className="nav-item text-center w-28 h-10 flex justify-center items-center text-blue-600 hover:bg-gray-200 hover:rounded-lg">
                  {/* <HomeIcon></HomeIcon> */}
                  <HomeIconSolid></HomeIconSolid>
                </li>
              </NavLink>
              <div className="w-full rounded-sm h-[3px] bg-blue-600 absolute -bottom-2 left-0"></div>
            </div>

            <div className="item-block relative">
              <NavLink to="/video">
                <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
                  <VideoIcon></VideoIcon>
                </li>
              </NavLink>
              {/* <div className="w-full rounded-sm h-[3px] bg-blue-600 absolute -bottom-1 left-0"></div> */}
            </div>

            <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
              <MarketPlaceIcon></MarketPlaceIcon>
            </li>
            <div className="item-block relative">
              <NavLink to="/group">
                <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
                  <GroupIcon></GroupIcon>
                </li>
              </NavLink>
              {/* <div className="w-full rounded-sm h-[3px] bg-blue-600 absolute -bottom-1 left-0"></div> */}
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