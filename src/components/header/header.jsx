import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import SearchIcon from "../../asset/icons/SearchIcon";
import MenuIcon from "../../asset/icons/MenuIcon";
import MessageIcon from "../../asset/icons/MessageIcon";
import NotifyIcon from "../../asset/icons/NotifyIcon";
import Navigate from "../navigate/Navigate";
import { IoInvertModeOutline } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => {
    setModal(!modal);
    console.log("modal: ", modal);
  };
  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("/login")
  }
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
          <div className="relative">
            <div
              onClick={toggleModal}
              className="item w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer"
            >
              <img
                className="w-full h-full rounded-full"
                src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
                alt="image-no-avartar"
              />
            </div>
            {modal && (
              <div className="absolute w-[340px] bg-white p-4 right-0 top-[45px] rounded-lg shadow-custom_2">
                <div className="profile">
                  <div className="block-top shadow-custom_2 p-2 rounded-lg">
                    <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                      <div className="item w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer ">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
                          alt="image-no-avartar"
                        />
                      </div>
                      <span className="ml-2 font-medium">Nguyễn Hữu Lộc</span>
                    </div>
                    <div className="saperate h-[1px] bg-gray-300 mt-3 "></div>
                    <span className="text-sm font-normal text-blue-600 mt-3 block cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      See all profiles
                    </span>
                  </div>
                </div>
                <div className="list-item-support flex flex-col gap-2 mt-5 cursor-pointer">
                  <div className="item flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                    <div className="icon-item w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-2xl hover:bg-slate-200 cursor-pointer">
                      <IoIosSettings></IoIosSettings>
                    </div>
                    <span className="title-item">Setting</span>
                  </div>
                  <div className="item flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                    <div className="icon-item w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-2xl hover:bg-slate-200 cursor-pointer">
                      <IoInvertModeOutline></IoInvertModeOutline>
                    </div>
                    <span className="title-item">Dark mode</span>
                  </div>
                  <NavLink to="/login">
                    <div className="item flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                      <div className="icon-item w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-2xl hover:bg-slate-200 cursor-pointer">
                        <IoLogOut></IoLogOut>
                      </div>
                      <span className="title-item">Log out</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
