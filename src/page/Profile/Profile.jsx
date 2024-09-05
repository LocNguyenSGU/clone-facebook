import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
const Profile = () => {
  return (
    <div className="">
      <div className="bg-white">
        <div className="w-3/4 mx-auto">
          <div className="top-info relative">
            <div className="img-cover h-[450px] w-full background-color_gradient_profile rounded-b-lg"></div>
            <div className="item w-40 h-40 bg-slate-100 rounded-full flex items-center justify-center p-1 border-white absolute bottom-[3%] left-[5%]">
              <img
                className="w-full h-full rounded-full"
                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s480x480&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeHTyxv3t8YAJ24W8G4sJVk3Wt9TLzuBU1Ba31MvO4FTUAsFm2TMcrJ5BlVuvq2LTfeDt6IC7-RE5q9Hplc7JLtL&_nc_ohc=qpkbNpQcWu8Q7kNvgFt7hYf&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAI10QcBavobNk-3wpplr_lvx92u2yT4lvYCeJFLFYM8A&oe=66ECFFFA"
                alt="image-no-avartar"
              />
            </div>
            <div className="name-friends flex flex-col gap-1 ml-[240px] mt-6">
              <h1 className="name text-3xl font-semibold">Nguyễn Hữu Lộc</h1>
              <p className="friends-number text-base text-gray-700">
                162 friends
              </p>
            </div>
            <div className="list-image_add-to-story_edit_profile flex justify-between">
              <div className="list-image flex ml-[240px]">
              <div className="item flex items-center gap-3 mb-2 -ml-1">
                <img
                  className="w-9  h-9 rounded-full"
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/458397669_884984543684188_8725750287651554026_n.jpg?stp=cp6_dst-jpg_s74x74&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdLb2VkjzUCh53JEjsl4QubslcifgfhuJuyVyJ-B-G4oZ1agN2k7O1ytR3llE-vqPR8xV6sXifcnqKclRfsVly&_nc_ohc=MTOUp-j1wpgQ7kNvgFWMQAS&_nc_ht=scontent-hkg1-1.xx&_nc_gid=Aihk-ivF-qu5pau_LWeqKB4&oh=00_AYDjViTnPRgmAmN_PMsE7KK2I-GLI9JYt4S3e5tNG_13kg&oe=66DEF7F4"
                  alt="image-no-avartar"
                />
              </div>
              <div className="item flex items-center gap-3 mb-2 -ml-1">
                <img
                  className="w-9  h-9 rounded-full"
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/458397669_884984543684188_8725750287651554026_n.jpg?stp=cp6_dst-jpg_s74x74&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdLb2VkjzUCh53JEjsl4QubslcifgfhuJuyVyJ-B-G4oZ1agN2k7O1ytR3llE-vqPR8xV6sXifcnqKclRfsVly&_nc_ohc=MTOUp-j1wpgQ7kNvgFWMQAS&_nc_ht=scontent-hkg1-1.xx&_nc_gid=Aihk-ivF-qu5pau_LWeqKB4&oh=00_AYDjViTnPRgmAmN_PMsE7KK2I-GLI9JYt4S3e5tNG_13kg&oe=66DEF7F4"
                  alt="image-no-avartar"
                />
              </div>
              <div className="item flex items-center gap-3 mb-2 -ml-1">
                <img
                  className="w-9  h-9 rounded-full"
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/458397669_884984543684188_8725750287651554026_n.jpg?stp=cp6_dst-jpg_s74x74&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdLb2VkjzUCh53JEjsl4QubslcifgfhuJuyVyJ-B-G4oZ1agN2k7O1ytR3llE-vqPR8xV6sXifcnqKclRfsVly&_nc_ohc=MTOUp-j1wpgQ7kNvgFWMQAS&_nc_ht=scontent-hkg1-1.xx&_nc_gid=Aihk-ivF-qu5pau_LWeqKB4&oh=00_AYDjViTnPRgmAmN_PMsE7KK2I-GLI9JYt4S3e5tNG_13kg&oe=66DEF7F4"
                  alt="image-no-avartar"
                />
              </div>
              <div className="item flex items-center gap-3 mb-2 -ml-1">
                <img
                  className="w-9  h-9 rounded-full"
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/458397669_884984543684188_8725750287651554026_n.jpg?stp=cp6_dst-jpg_s74x74&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdLb2VkjzUCh53JEjsl4QubslcifgfhuJuyVyJ-B-G4oZ1agN2k7O1ytR3llE-vqPR8xV6sXifcnqKclRfsVly&_nc_ohc=MTOUp-j1wpgQ7kNvgFWMQAS&_nc_ht=scontent-hkg1-1.xx&_nc_gid=Aihk-ivF-qu5pau_LWeqKB4&oh=00_AYDjViTnPRgmAmN_PMsE7KK2I-GLI9JYt4S3e5tNG_13kg&oe=66DEF7F4"
                  alt="image-no-avartar"
                />
              </div>
              <div className="item flex items-center gap-3 mb-2 -ml-1">
                <img
                  className="w-9  h-9 rounded-full"
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/458397669_884984543684188_8725750287651554026_n.jpg?stp=cp6_dst-jpg_s74x74&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdLb2VkjzUCh53JEjsl4QubslcifgfhuJuyVyJ-B-G4oZ1agN2k7O1ytR3llE-vqPR8xV6sXifcnqKclRfsVly&_nc_ohc=MTOUp-j1wpgQ7kNvgFWMQAS&_nc_ht=scontent-hkg1-1.xx&_nc_gid=Aihk-ivF-qu5pau_LWeqKB4&oh=00_AYDjViTnPRgmAmN_PMsE7KK2I-GLI9JYt4S3e5tNG_13kg&oe=66DEF7F4"
                  alt="image-no-avartar"
                />
              </div>
              <div className="item flex items-center gap-3 mb-2 -ml-1">
                <img
                  className="w-9  h-9 rounded-full"
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/458397669_884984543684188_8725750287651554026_n.jpg?stp=cp6_dst-jpg_s74x74&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdLb2VkjzUCh53JEjsl4QubslcifgfhuJuyVyJ-B-G4oZ1agN2k7O1ytR3llE-vqPR8xV6sXifcnqKclRfsVly&_nc_ohc=MTOUp-j1wpgQ7kNvgFWMQAS&_nc_ht=scontent-hkg1-1.xx&_nc_gid=Aihk-ivF-qu5pau_LWeqKB4&oh=00_AYDjViTnPRgmAmN_PMsE7KK2I-GLI9JYt4S3e5tNG_13kg&oe=66DEF7F4"
                  alt="image-no-avartar"
                />
              </div>
              <div className="item flex items-center gap-3 mb-2 -ml-1">
                <img
                  className="w-9  h-9 rounded-full"
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/458397669_884984543684188_8725750287651554026_n.jpg?stp=cp6_dst-jpg_s74x74&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdLb2VkjzUCh53JEjsl4QubslcifgfhuJuyVyJ-B-G4oZ1agN2k7O1ytR3llE-vqPR8xV6sXifcnqKclRfsVly&_nc_ohc=MTOUp-j1wpgQ7kNvgFWMQAS&_nc_ht=scontent-hkg1-1.xx&_nc_gid=Aihk-ivF-qu5pau_LWeqKB4&oh=00_AYDjViTnPRgmAmN_PMsE7KK2I-GLI9JYt4S3e5tNG_13kg&oe=66DEF7F4"
                  alt="image-no-avartar"
                />
              </div>
              
              </div>
              <div className="group-button flex gap-2">
                <div className="btn-add-story text-white bg-blue-600 flex items-center rounded-md px-2 gap-2 text-sm font-normal">
                  <div className=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg></div>
                  Add to story
                </div>
                <div className="btn-add-story bg-gray-300 flex items-center font-normal rounded-md px-2 gap-2 text-black text-sm">
                  <FaPen></FaPen>
                  Edit profile
              </div>
              </div>
                
            </div>
            <div className="separate h-[1px] w-full bg-gray-300 mt-6"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-3">
      <div className="w-3/4 mx-auto bg-red-600 h-[300px]"></div>
      </div>
    </div>
  );
};

export default Profile;
