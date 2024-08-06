import React from "react";
import Header from "../../components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Video from "../Video/Video";
import Group from "../Group/Group";
import Profile from "../Profile/Profile";

const ContentPage = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="container-block bg-slate-100 w-screen h-[calc(100vh - 57px)] mt-[50px] grid grid-cols-12 gap-4 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="video" element={<Video />} />
          <Route path="group" element={<Group />} />
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default ContentPage;
