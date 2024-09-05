import React from "react";
import BodyLeft from "../../components/body/BodyLeft";
import MainContent from "../../components/body/MainContent";
import BodyRight from "../../components/body/BodyRight";

const Home = () => {
  return (
    <>
      <div className="container-block bg-slate-100 w-screen h-[calc(100vh - 57px)] mt-[50px] grid grid-cols-12 gap-4 overflow-hidden">
        <BodyLeft></BodyLeft>
        <MainContent></MainContent>
        <BodyRight></BodyRight>
      </div>
    </>
  );
};

export default Home;
