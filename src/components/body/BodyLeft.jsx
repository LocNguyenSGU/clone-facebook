import React from "react";
import BirthdayIcon from "../../asset/icons/BirthdayIcon";
import { NavLink } from "react-router-dom";

const BodyLeft = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  console.log("123");
  console.log(userInfo);
  return (
    <>
      <div className="body-left h-[calc(100vh-57px)] overflow-y-auto col-span-3 pt-2">
        <div className="list-menu pt-1">
          <NavLink to="profile">
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="item w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer">
              <img
                className="w-full h-full rounded-full"
                src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                alt="image-no-avartar"
              />
            </div>
            <span className="text-base cursor-pointer">{userInfo?.firstName} {userInfo?.lastName}</span>
          </div>
          </NavLink>
          
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="icon icon-friend w-7 h-7"></div>
            <span className="text-base">Friends</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="icon icon-memories"></div>
            <span className="text-base">Memories</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="icon icon-saved"></div>
            <span className="text-base">Saved</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="icon icon-group"></div>
            <span className="text-base">Groups</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="icon icon-video"></div>
            <span className="text-base">Videos</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="icon icon-marketplace"></div>
            <span className="text-base">Marketplace</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>

          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
          <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <div className="w-7 h-7">
                <BirthdayIcon></BirthdayIcon>
              </div>
            </div>
            <span className="text-base">Birthday</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyLeft;
