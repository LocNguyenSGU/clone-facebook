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
import "./style/sprite.css";
import BirthdayIcon from "./components/icons/BirthdayIcon";
import liveVideoIcon from "./asset/icon/liveVideoIcon.png"
import feelingIcon from "./asset/icon/feelingIcon.png"
import imageIcon from "./asset/icon/imageIcon.png"
function App() {
  return (
    <>
      <header className="pt-1 pb-1 container-block flex items-center content-between justify-between shadow-custom border-b-[1px] fixed top-0 bg-white z-10">
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
        <div className="navigate mr-[109px]">
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
      <body className="container-block bg-slate-100 w-screen mt-[57px] flex justify-between">
        <div className="body-left">
          <div className="list-menu pt-3">
            <div className="item-menu flex items-center gap-2">
              <div className="item w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200">
                <img
                  className="w-full h-full rounded-full"
                  src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
                  alt="image-no-avartar"
                />
              </div>
              <span className="text-base">Nguyễn Hữu Lộc</span>
            </div>
            <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
              <div className="icon icon-friend w-7 h-7"></div>
              <span className="text-base">Friends</span>
            </div>
            <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
              <div className="icon icon-memories"></div>
              <span className="text-base">Memories</span>
            </div>
            <div className="item-menu flex items-center gap-2 p-2 rounded-md hover:bg-gray-200">
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
          </div>
        </div>
        <div className="main-content mr-[170px] mt-[20px]">
          <div className="list-story flex gap-2 items-center">
            <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md"></div>
            <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md"></div>
            <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md"></div>
            <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md"></div>
          </div>
          <div className="write-post p-3 shadow-lg mt-4 bg-white rounded-lg">
            <div className="block-top flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
                  alt="image-no-avartar"
                />
              <input
                type="text"
                placeholder="What's on your mind, Loc?"
                className="w-full h-10 bg-gray-100 rounded-full text-gray-800 p-2 outline-none border-none text-lg"
              ></input>
            </div>
            <div className="separate w-full h-[1px] bg-slate-200 mt-3"></div>
            <div className="block-bottom flex p-3 items-center justify-center content-between gap-14">
              <div className="item flex items-center gap-2">
                <img className="w-7 h-7 object-cover" src={liveVideoIcon} alt="live video icon"></img>
                <div className="text-base text-gray-500">Live video</div>
              </div>
              <div className="item flex items-center gap-2">
                <img className="w-7 h-7 object-cover" src={imageIcon} alt="imageIcon"></img>
                <div className="text-base text-gray-500">Photo/video</div>
              </div>
              <div className="item flex items-center gap-2">
                <img className="w-7 h-7 object-cover" src={feelingIcon} alt="feeling icon"></img>
                <div className="text-base text-gray-500">Feeling/activity</div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-right"></div>
      </body>
    </>
  );
}

export default App;
