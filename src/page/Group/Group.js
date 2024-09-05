import React from "react";
import LeftGroup from "../../components/leftGroup/LeftGroup";
import Post from "../../components/post/Post";

const Group = () => {
  return (
    <>
      <div className="container-block bg-slate-100 w-screen h-[calc(100vh - 57px)] mt-[50px] grid grid-cols-12 gap-4 overflow-hidden">
        <LeftGroup></LeftGroup>
        <div className="col-span-8 h-screen ml-28 overflow-y-auto overflow-hidden no-scrollbar pb-24">
          <Post></Post>
        </div>
      </div>
    </>
  );
};

export default Group;
