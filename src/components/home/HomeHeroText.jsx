import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-5 text-center">
      <div className="text-[4.5vw] uppercase leading-[8vw] flex items-center justify-center" >Welcome</div>
      <div className="text-[4.5vw] uppercase leading-[8vw] flex items-center justify-center">Too</div>
      <div className="text-[4.5vw] uppercase leading-[8vw] flex items-center justify-center flex-start ">B <div className="h-[8vw] w-[14vw] rounded-full overflow-hidden border-4 border-white "><Video/></div> ring</div>
      <div className="text-[4.5vw] uppercase leading-[8vw] flex items-center justify-center">Homepage</div>
    </div>
  );
};

export default HomeHeroText;
