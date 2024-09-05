import React, { useEffect, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import SearchIcon from "../../asset/icons/SearchIcon";
import MenuIcon from "../../asset/icons/MenuIcon";
import MessageIcon from "../../asset/icons/MessageIcon";
import NotifyIcon from "../../asset/icons/NotifyIcon";
import Navigate from "../navigate/Navigate";
import { IoInvertModeOutline } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch("http://localhost:8080/auth/me", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserInfo(data.data);
      }
    };
    fetchUserInfo();
  }, []); // Chỉ chạy một lần khi component mount

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Lưu dưới dạng chuỗi JSON
    }
  }, [userInfo]); // Chỉ chạy khi userInfo thay đổi
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleModal = () => {
    setModal(!modal);
    console.log("modal: ", modal);
  };
  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  // useEffect(() => {
  //   const handleClickOutSide = (e) => {
  //     if (modalRef.current && !modalRef.current.contains(e.target)) {
  //       setModal(false);
  //     }
  //   };
  //   if (modal) {
  //     document.addEventListener("mousedown", handleClickOutSide);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutSide);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutSide);
  //   };
  // }, [modal]);
  // useEffect(() => {
  //   setModal(false);
  // }, [location]);
  return (
    <>
      <header className="pt-1 pb-1 container-block flex items-center content-between justify-between shadow-custom border-b-[1px] fixed top-0 bg-white z-10">
        <div className="logo_search flex items-center ">
          <NavLink to="/">
            <div className="cursor-pointer">
              <FaFacebook className="text-blue-600 logo text-4xl"></FaFacebook>
            </div>
          </NavLink>
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
                src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                alt="image-no-avartar"
              />
            </div>
            {modal && (
              <div
                className="absolute w-[340px] bg-white p-4 right-0 top-[45px] rounded-lg shadow-custom_2"
                ref={modalRef}
                onClick={(e)=> e.stopPropagation()}
              >
                <div className="profile">
                  <div className="block-top shadow-custom_2 p-2 rounded-lg">
                    <NavLink to="profile">
                      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                        <div className="item w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer ">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                            alt="image-no-avartar"
                          />
                        </div>
                        <span className="ml-2 font-medium">{userInfo?.firstName} {userInfo?.lastName}</span>
                      </div>
                    </NavLink>

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
                    <div
                      className="item flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
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
