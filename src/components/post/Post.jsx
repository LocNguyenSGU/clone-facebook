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
    fetch("http://localhost:8080/post/getall/0/1")
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
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/452289594_463353383295975_4753290836925155938_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rBpYY7sXd1kQ7kNvgEBs05h&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYA6zNlYc3Gw7l2mkaCKwO87w0T12LNQgw_xrr665VwvYA&oe=66AB8C39"
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
