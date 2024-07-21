import React from "react";
import PublicIcon from "../../asset/icons/modeIcon/PublicIcon";
import ThreeDotIcon from "../../asset/icons/ThreeDotIcon";
import XMarkIcon from "../../asset/icons/XMarkIcon";
import NumberLikeIcon from "../../asset/icons/NumberLikeIcon";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";
import liveVideoIcon from "../../asset/icons/liveVideoIcon.png";
import feelingIcon from "../../asset/icons/feelingIcon.png";
import imageIcon from "../../asset/icons/imageIcon.png";
import Post from "../post/Post";

const MainContent = () => {
  return (
    <>
      <div className="main-content mr-[10px] mt-[20px] h-[calc(100vh-57px)] overflow-y-auto overflow-hidden col-span-6 p-7 no-scrollbar">
        <div className="list-story flex gap-2 items-center">
          <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md"></div>
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
              <img
                className="w-7 h-7 object-cover"
                src={liveVideoIcon}
                alt="live video icon"
              ></img>
              <div className="text-base text-gray-500">Live video</div>
            </div>
            <div className="item flex items-center gap-2">
              <img
                className="w-7 h-7 object-cover"
                src={imageIcon}
                alt="imageIcon"
              ></img>
              <div className="text-base text-gray-500">Photo/video</div>
            </div>
            <div className="item flex items-center gap-2">
              <img
                className="w-7 h-7 object-cover"
                src={feelingIcon}
                alt="feeling icon"
              ></img>
              <div className="text-base text-gray-500">Feeling/activity</div>
            </div>
          </div>
        </div>
        <div className="list-post">
          <Post></Post>
        </div>
      </div>
    </>
  );
};

export default MainContent;
