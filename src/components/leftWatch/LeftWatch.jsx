import React from "react";
import SearchIcon from "../../asset/icons/SearchIcon";
import VideoIcon from "../../asset/icons/VideoIcon";
import VideoIconSolid from "../../asset/icons/VideoIconSolid";
import { MdLinkedCamera } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";

const LeftVideo = () => {
  return (
    <>
      <div className="col-span-3 bg-white h-screen pt-4 shadow-custom ">
        <h1 className="text-xl font-semibold pl-4">Video</h1>
        <div className="search relative px-4 mt-2">
          <input
            type="text"
            placeholder="Search videos"
            className="w-full h-10 bg-gray-100 rounded-full text-gray-700 p-2 pl-8 outline-none border-none text-sm"
          />
          <div className="search-icon absolute top-3 left-7 text-gray-500">
            <SearchIcon></SearchIcon>
          </div>
        </div>
        <div className="list-category px-2 mt-3 flex gap-2 flex-col">
            <div className="item flex items-center gap-5 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-200">
                <div className="video-icon w-9 h-9 rounded-full text-white flex items-center justify-center bg-blue-600">
                    <VideoIconSolid></VideoIconSolid>
                </div>
                <span>Home</span>
            </div>
            <div className="item flex items-center gap-5 px-4 py-2 rounded-lg hover:bg-gray-200">
                <div className="video-icon w-9 h-9 rounded-full text-gray-700 flex items-center justify-center bg-gray-200 text-2xl">
                   <MdLinkedCamera></MdLinkedCamera>
                </div>
                <span>Live</span>
            </div>
            <div className="item flex items-center gap-5 px-4 py-2 rounded-lg hover:bg-gray-200">
                <div className="video-icon w-9 h-9 rounded-full text-gray-700 flex items-center justify-center  bg-gray-200 text-2xl">
                    <RiSaveFill></RiSaveFill>
                </div>
                <span>Saved videos</span>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default LeftVideo;
