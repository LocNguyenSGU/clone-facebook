import { FaFacebook } from "react-icons/fa";
import "./index.scss";
import HomeIcon from "./components/icons/HomeIcon";
import VideoIcon from "./components/icons/VideoIcon";
import GroupIcon from "./components/icons/GroupIcon";
import GamingIcon from "./components/icons/GamingIcon";
import MarketPlaceIcon from "./components/icons/MarketPlaceIcon";
import HomeIconSolid from "./components/icons/HomeIconSolid";
import SearchIcon from "./components/icons/SearchIcon";
import MenuIcon from "./components/icons/MenuIcon";
import MessageIcon from "./components/icons/MessageIcon";
import NotifyIcon from "./components/icons/NotifyIcon";
function App() {
  return (
    <>
      <header className="pt-2 pb-2 container-block flex items-center content-between justify-between shadow-custom border-b-[1px]">
        <div className="logo_search flex items-center">
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
        <div className="navigate mr-32">
          <ul className="list-item-nav flex items-center gap-2 justify-center content-center">
            <div className="item-block relative">
              <li className="nav-item text-center w-28 h-10 flex justify-center items-center text-blue-600 hover:bg-gray-200 hover:rounded-lg">
                {/* <HomeIcon></HomeIcon> */}
                <HomeIconSolid></HomeIconSolid>
              </li>
              <div className="w-full rounded-sm h-[3px] bg-blue-600 absolute -bottom-2 left-0"></div>
              
            </div>
            <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
              <VideoIcon></VideoIcon>
            </li>
            <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
              <MarketPlaceIcon></MarketPlaceIcon>
            </li>
            <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
              <GroupIcon></GroupIcon>
            </li>
            <li className="nav-item text-center w-28 h-12 flex justify-center items-center text-gray-500 hover:bg-gray-200 hover:rounded-lg">
              <GamingIcon></GamingIcon>
            </li>
          </ul>
        </div>
        <div className="notify-block flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200">
            <MenuIcon></MenuIcon>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200">
            <MessageIcon></MessageIcon>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200">
            <NotifyIcon></NotifyIcon>
          </div>
          <div className="item w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200">
            <img
              className="w-full h-full rounded-full"
              src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
              alt="image-no-avartar"
            />
          </div>
        </div>
      </header>
      <body className="h-screen bg-slate-100 w-screen"></body>
    </>
  );
}

export default App;
