import React from "react";
import LeftWatch from "../../components/leftWatch/LeftWatch";
import Watch from "../../components/Watch/Watch";

const Video = () => {
  return (
    <>
      <div className="container-block bg-slate-100 w-screen h-[calc(100vh - 57px)] mt-[50px] grid grid-cols-12 gap-4 overflow-hidden">
        <LeftWatch></LeftWatch>
        <Watch></Watch>
      </div>
    </>
  );
};

export default Video;
