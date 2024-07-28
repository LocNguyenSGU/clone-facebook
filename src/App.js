import "./index.scss";
import "./style/sprite.css";
import Header from "./components/header/Header";
import BodyLeft from "./components/body/BodyLeft";
import MainContent from "./components/body/MainContent";
import BodyRight from "./components/body/BodyRight";
import Home from "./page/Home/Home";
import Video from "./page/Video/Video";
import Group from "./page/Group/Group";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signin from "./page/Signin/Signin";
import { useState } from "react";
import Signup from "./page/Signup/Signup";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/signin")
  }
  return (
    <>
      {isAuthenticated && (<Header onLogout={handleLogout}></Header>)}
      <body className="container-block bg-slate-100 w-screen h-[calc(100bh - 57px)] mt-[57px] grid grid-cols-12 gap-4 h-[calc(100vh-57px)] overflow-hidden">
        {/* <BodyLeft></BodyLeft> */}
        {/* <MainContent></MainContent> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/video" element={<Video></Video>}></Route>
          <Route path="/group" element={<Group></Group>}></Route>
          <Route path="/signin" element={<Signup></Signup>}></Route>
        </Routes>
        {/* <BodyRight></BodyRight> */}
      </body>
    </>
  );
}

export default App;
