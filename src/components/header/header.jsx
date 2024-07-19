import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import VideoIcon from "../../asset/icons/VideoIcon";
import MarketPlaceIcon from "../../asset/icons/MarketPlaceIcon";
import GroupIcon from "../../asset/icons/GroupIcon";
import HomeIconSolid from "../../asset/icons/HomeIconSolid";
import GamingIcon from "../../asset/icons/GamingIcon";
import SearchIcon from "../../asset/icons/SearchIcon";
import HomeIcon from "../../asset/icons/HomeIcon";
import MenuIcon from "../../asset/icons/MenuIcon";
import MessageIcon from "../../asset/icons/MessageIcon";
import NotifyIcon from "../../asset/icons/NotifyIcon";
import Navigate from "../navigate/Navigate";

const Header = () => {
  return (
    <>
      <header className="pt-1 pb-1 container-block flex items-center content-between justify-between shadow-custom border-b-[1px] fixed top-0 bg-white z-10">
        <div className="logo_search flex items-center cursor-pointer">
          <FaFacebook className="text-blue-600 logo text-4xl"></FaFacebook>
          <div className="search-block relative ml-2">
            <input
              type="text"
              placeholder="Search Facebook"
              className="w-60 h-10 bg-gray-100 rounded-full text-gray-700 p-2 pl-8 outline-none border-none text-sm"
            ></input>
            <div className="absolute top-3 left-3 text-slate-700">
              <SearchIcon></SearchIcon>
            </div>
          </div>
        </div>
        <Navigate></Navigate>
        <div className="notify-block flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200  cursor-pointer">
            <MenuIcon></MenuIcon>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer">
            <MessageIcon></MessageIcon>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer">
            <NotifyIcon></NotifyIcon>
          </div>
          <div className="item w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer">
            <img
              className="w-full h-full rounded-full"
              src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
              alt="image-no-avartar"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
