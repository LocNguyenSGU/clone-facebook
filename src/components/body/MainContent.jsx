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
import PlusIcon from "../../asset/icons/PlusIcon";

const MainContent = () => {
  return (
    <>
      <div className="main-content mr-[10px] h-[calc(100vh-57px)] overflow-y-auto overflow-x-auto col-span-6 p-7 no-scrollbar pt-4">
        <div className="list-story flex gap-4 overflow-x-auto">
          <div className="card-story w-[140px] h-[250px] rounded-md bg-white relative shadow-lg">
            <div className="border-img w-10 h-10 border-[4px] border-white flex items-center justify-center absolute rounded-full top-[180px] left-[48px] bg-blue-500 text-white">
              <PlusIcon></PlusIcon>
            </div>
            <div className="w-full h-[200px]">
              <img
                src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/448440075_122106999536361697_7733177153434215805_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbfmeeGiHGDh8nI6KS5nZnSLd_f2KkkTRIt39_YqSRNNxn4A0qb43djILEF_5Q2h4VCHd1BSCe2GvSkn7YWLEE&_nc_ohc=wogufLR4SQEQ7kNvgENYaX3&_nc_ht=scontent-sin6-1.xx&oh=00_AYCQprA2FmcSlFtNDwxzGCtpFA4lx5NK_sLNWv-eUenrGw&oe=66A7AB15"
                alt="vong tay"
                className="w-full h-full object-cover rounded-md rounded-b-none"
              />
            </div>
            <div className="bottom-story-card text-center">
              <span className="text-sm mt-5 block">Create story</span>
            </div>
          </div>
          <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md relative shadow-lg">
            <div className="border-img w-10 h-10 border-[4px] border-blue-500 flex items-center justify-center absolute rounded-full top-3 left-3">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/452052526_872462241594993_2639352830946233542_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeFMH2SEbwpHOeexjRu3kBmxlAyhMQPGVHaUDKExA8ZUduFWYO1gx0aXMePNpAFKGuwJEYjtT_W4SsODoPu-SLdX&_nc_ohc=UZHSkLjR3P4Q7kNvgE8S4a6&_nc_ht=scontent-sin6-4.xx&oh=00_AYBM8jxT0LBkCUh5nG7rdou5VdFyTvbeFOI14wtpc29kAA&oe=66A7B261"
                alt="avatar"
              />
            </div>
            <img
              src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/448440075_122106999536361697_7733177153434215805_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbfmeeGiHGDh8nI6KS5nZnSLd_f2KkkTRIt39_YqSRNNxn4A0qb43djILEF_5Q2h4VCHd1BSCe2GvSkn7YWLEE&_nc_ohc=wogufLR4SQEQ7kNvgENYaX3&_nc_ht=scontent-sin6-1.xx&oh=00_AYCQprA2FmcSlFtNDwxzGCtpFA4lx5NK_sLNWv-eUenrGw&oe=66A7AB15"
              alt="vong tay"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md relative shadow-lg">
            <div className="border-img w-10 h-10 border-[4px] border-blue-500 flex items-center justify-center absolute rounded-full top-3 left-3">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/452052526_872462241594993_2639352830946233542_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeFMH2SEbwpHOeexjRu3kBmxlAyhMQPGVHaUDKExA8ZUduFWYO1gx0aXMePNpAFKGuwJEYjtT_W4SsODoPu-SLdX&_nc_ohc=UZHSkLjR3P4Q7kNvgE8S4a6&_nc_ht=scontent-sin6-4.xx&oh=00_AYBM8jxT0LBkCUh5nG7rdou5VdFyTvbeFOI14wtpc29kAA&oe=66A7B261"
                alt="avatar"
              />
            </div>
            <img
              src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/448440075_122106999536361697_7733177153434215805_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbfmeeGiHGDh8nI6KS5nZnSLd_f2KkkTRIt39_YqSRNNxn4A0qb43djILEF_5Q2h4VCHd1BSCe2GvSkn7YWLEE&_nc_ohc=wogufLR4SQEQ7kNvgENYaX3&_nc_ht=scontent-sin6-1.xx&oh=00_AYCQprA2FmcSlFtNDwxzGCtpFA4lx5NK_sLNWv-eUenrGw&oe=66A7AB15"
              alt="vong tay"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="card-story w-[140px] h-[250px] bg-slate-300 rounded-md relative shadow-lg">
            <div className="border-img w-10 h-10 border-[4px] border-blue-500 flex items-center justify-center absolute rounded-full top-3 left-3">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/452052526_872462241594993_2639352830946233542_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeFMH2SEbwpHOeexjRu3kBmxlAyhMQPGVHaUDKExA8ZUduFWYO1gx0aXMePNpAFKGuwJEYjtT_W4SsODoPu-SLdX&_nc_ohc=UZHSkLjR3P4Q7kNvgE8S4a6&_nc_ht=scontent-sin6-4.xx&oh=00_AYBM8jxT0LBkCUh5nG7rdou5VdFyTvbeFOI14wtpc29kAA&oe=66A7B261"
                alt="avatar"
              />
            </div>
            <img
              src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/448440075_122106999536361697_7733177153434215805_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFbfmeeGiHGDh8nI6KS5nZnSLd_f2KkkTRIt39_YqSRNNxn4A0qb43djILEF_5Q2h4VCHd1BSCe2GvSkn7YWLEE&_nc_ohc=wogufLR4SQEQ7kNvgENYaX3&_nc_ht=scontent-sin6-1.xx&oh=00_AYCQprA2FmcSlFtNDwxzGCtpFA4lx5NK_sLNWv-eUenrGw&oe=66A7AB15"
              alt="vong tay"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
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
              className="w-full h-10 bg-gray-100 rounded-full text-gray-800 p-2 outline-none border-none text-lg font-light"
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
