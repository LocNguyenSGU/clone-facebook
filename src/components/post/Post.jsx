import React, { useEffect, useState } from "react";
import PublicIcon from "../../asset/icons/modeIcon/PublicIcon";
import ThreeDotIcon from "../../asset/icons/ThreeDotIcon";
import XMarkIcon from "../../asset/icons/XMarkIcon";
import NumberLikeIcon from "../../asset/icons/NumberLikeIcon";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token")
    fetch("http://localhost:8080/post/0/deleted/1/mode", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => {
        if (!res) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setPosts(data.data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id} className="post shadow-lg mt-4 bg-white rounded-lg">
            <div className="p-3 pb-0 header-post flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                // src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
                src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t39.30808-1/352190005_1600614940349484_5227447212799118808_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEAqXs7qN6XeSBbvTIQkgIk5J2mPlPA3vTknaY-U8De9NuD4wTTo7P8qA_0VINwDy9FmeEjZWLNhfZAUaIXtvWR&_nc_ohc=_mWOTIqDFOMQ7kNvgE_mHKJ&_nc_ht=scontent.fsgn5-7.fna&oh=00_AYDVLI5ga7N0IvlltBgaLVlsZxODN96Ze-QsW2iZTagYFA&oe=669A66B5"
                alt="image-no-avartar"
              />
              <div className="name-time flex flex-col min-w-[77%]">
                <span className="name text-base font-medium cursor-pointer">
                  VTV 24
                </span>
                <div className="flex items-center content-center gap-2">
                  <span className="time text-sm text-gray-500 font-light ">
                    5 hours ago
                  </span>
                  <div className="w-[2px] h-[2px] rounded-full bg-gray-600"></div>
                  <div className="text-gray-500">
                    <PublicIcon></PublicIcon>
                  </div>
                </div>
              </div>
              <div className="menu-action flex items-center gap-4 text-gray-500 cursor-pointer">
                <ThreeDotIcon></ThreeDotIcon>
                <XMarkIcon></XMarkIcon>
              </div>
            </div>
            <div className="main-post mt-3">
              <div className="p-3 pt-0 text-post max-h[500px] font-light text-gray-900">
               {post.content}…{" "}
                <span className="font-semibold">See more</span>
              </div>
              <div className="list-image-post w-full h-[600px]">
                <img
                  className="w-full h-full object-cover"
                  src="data:image/jpeg;base64,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"
                  alt="hoi an, Da Nang"
                ></img>
              </div>
              <div className="p-3 number-like-comment flex justify-between">
                <div className="like-block flex items-center gap-3">
                  <div className="w-5 h-5">
                    <NumberLikeIcon></NumberLikeIcon>
                  </div>
                  <span className="font-light text-gray-500 text-sm">{post.numberEmotion}</span>
                </div>
                <div className="comment-share flex gap-3">
                  <div className="comment-block font-light text-gray-500 text-base">
                    <span>{post.numberComment}</span> comments
                  </div>
                  <div className="share-block font-light text-gray-500 text-base">
                    <span>{post.numberShare}</span> shares
                  </div>
                </div>
              </div>
              <div className="px-3 parent-separate">
                <div className="separate w-full h-[1px] bg-slate-200  border-transparent"></div>
              </div>
              <div className="p-3 action-like-comment-share flex items-center justify-center gap-24">
                <div className="action-like flex items-center text-gray-600 gap-2">
                  <AiOutlineLike className="text-2xl"></AiOutlineLike>
                  <span className="text-base">Like</span>
                </div>
                <div className="action-comment flex items-center text-gray-600 gap-2">
                  <FaRegComment className="text-2xl"></FaRegComment>
                  <span className="text-base">Comment</span>
                </div>
                <div className="action-share flex items-center text-gray-600 gap-2">
                  <TbShare3 className="text-2xl"></TbShare3>
                  <span className="text-base">Share</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* <div className="post shadow-lg mt-4 bg-white rounded-lg">
            <div className="p-3 pb-0 header-post flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                // src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeFl6l4OpDGVujJD483s_MXtso2H55p0AlGyjYfnmnQCUW3TbxnQbwfTJOqVf0ziXjt2rkCiydc2elHiyuOz-sPC&_nc_ohc=IIi3OwsH1EIQ7kNvgHLmgY2&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDD-d6OyTv-pw14CZA7L9NnQmD50COZY_SInxgA4R9etA&oe=66BACB38"
                src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t39.30808-1/352190005_1600614940349484_5227447212799118808_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEAqXs7qN6XeSBbvTIQkgIk5J2mPlPA3vTknaY-U8De9NuD4wTTo7P8qA_0VINwDy9FmeEjZWLNhfZAUaIXtvWR&_nc_ohc=_mWOTIqDFOMQ7kNvgE_mHKJ&_nc_ht=scontent.fsgn5-7.fna&oh=00_AYDVLI5ga7N0IvlltBgaLVlsZxODN96Ze-QsW2iZTagYFA&oe=669A66B5"
                alt="image-no-avartar"
              />
              <div className="name-time flex flex-col min-w-[77%]">
                <span className="name text-base font-medium cursor-pointer">VTV 24</span>
                <div className="flex items-center content-center gap-2">
                  <span className="time text-sm text-gray-500 font-light ">
                    5 hours ago
                  </span>
                  <div className="w-[2px] h-[2px] rounded-full bg-gray-600"></div>
                  <div className="text-gray-500">
                    <PublicIcon></PublicIcon>
                  </div>
                </div>
              </div>
              <div className="menu-action flex items-center gap-4 text-gray-500 cursor-pointer">
               <ThreeDotIcon></ThreeDotIcon>
                <XMarkIcon></XMarkIcon>
              </div>
            </div>
            <div className="main-post mt-3">
              <div className="p-3 pt-0 text-post max-h[500px] font-light text-gray-900">
                Theo tạp chí du lịch danh tiếng Travel+Leisure, Hội An vinh dự
                đứng thứ 4 trong danh sách 25 thành phố được yêu thích nhất thế
                giới và thứ 3 trong danh sách 25 thành phố được yêu thích nhất
                châu Á trong Giải thưởng World's Best Awards 2024. Giải thưởng
                World’s Best Awards dựa trên khảo sát từ hơn 186.000 độc giả năm
                2024, đưa ra hơn 700.000 phiếu đánh giá về hơn 8.700 cơ sở, bao
                gồm khách sạn, thành phố, hãng du thuyền, và nhiều dịch vụ du
                lịch khác. Các thành phố được đán…{" "}
                <span className="font-semibold">See more</span>
              </div>
              <div className="list-image-post w-full h-[600px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/417439744_780670927440792_2200570944284647086_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQDaWVGBompoSofQXj4wff_FU94XrGA5X8VT3hesYDlYWzDRnb75QiB78GwxbzX-vOc9e0AxPcISz_KV4brvn0&_nc_ohc=xwsmDCQbFQwQ7kNvgEwjfCS&_nc_ht=scontent-sin6-4.xx&oh=00_AYCaQ8RBzHdTVGe5hNIKeydFlyFsYiT5UtcrGLfu6XtLGA&oe=66A2A26C"
                  alt="hoi an, Da Nang"
                ></img>
              </div>
              <div className="p-3 number-like-comment flex justify-between">
                <div className="like-block flex items-center gap-3">
                  <div className="w-5 h-5">
                    <NumberLikeIcon></NumberLikeIcon>
                  </div>
                  <span className="font-light text-gray-500 text-sm">797</span>
                </div>
                <div className="comment-share flex gap-3">
                  <div className="comment-block font-light text-gray-500 text-base">
                    <span>10321</span> comments
                  </div>
                  <div className="share-block font-light text-gray-500 text-base">
                    <span>123</span> shares
                  </div>
                </div>
              </div>
              <div className="px-3 parent-separate">
                <div className="separate w-full h-[1px] bg-slate-200  border-transparent"></div>
              </div>
              <div className="p-3 action-like-comment-share flex items-center justify-center gap-24">
                <div className="action-like flex items-center text-gray-600 gap-2">
                  <AiOutlineLike className="text-2xl"></AiOutlineLike>
                  <span className="text-base">Like</span>
                </div>
                <div className="action-comment flex items-center text-gray-600 gap-2">
                  <FaRegComment className="text-2xl"></FaRegComment>
                  <span className="text-base">Comment</span>
                </div>
                <div className="action-share flex items-center text-gray-600 gap-2">
                  <TbShare3 className="text-2xl"></TbShare3>
                  <span className="text-base">Share</span>
                </div>
              </div>
            </div>
          </div> */}
    </>
  );
};

export default Post;
