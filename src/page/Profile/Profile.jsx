import React from "react";

const Profile = () => {
  return (
    <div className="col-span-12 bg-white">
      <div className="bg-white">
      <div className="w-3/4 mx-auto h-screen overflow-y-auto overflow-hidden no-scrollbar pb-24 bg-red-200">
        <div className="top-info relative">
          <div className="img-cover h-[400px] w-full bg-blue-100 rounded-b-2xl"></div>
          <div className="item w-40 h-40 bg-slate-100 rounded-full flex items-center justify-center p-1 border-white absolute -bottom-[14%] left-[5%]">
            <img
              className="w-full h-full rounded-full"
              src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
              alt="image-no-avartar"
            />
          </div>
          <div className="name-friends flex flex-col gap-1 ml-[240px] mt-6">
            <h1 className="name text-3xl font-semibold">Nguyen Huu Loc</h1>
            <p className="friends-number text-base text-gray-100">188 friends</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
