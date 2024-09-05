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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="video" element={<Video />} />
          <Route path="group" element={<Group />} />
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Routes>
    </div>
  );
};

export default ContentPage;
