import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-5 text-center h-full w-full text-white flex flex-col justify-center items-center lg:justify-around gap-7">
      <div className="text-[12vw] uppercase leading-[8vw] flex items-center justify-center sm:text-[4.5vw]" >Welcome</div>
      <div className="text-[12vw] uppercase leading-[8vw] flex items-center justify-center sm:text-[4.5vw]">Too</div>
      <div className="text-[12vw] uppercase leading-[8vw] flex items-center justify-center flex-start sm:text-[4.5vw] ">Dh <div className="h-[8vw] w-[14vw] rounded-full overflow-hidden border-4 border-white "><Video/></div> ni</div>
      <div className="text-[12vw] uppercase leading-[8vw] flex items-center justify-center sm:text-[4.5vw]">Homepage</div>
    </div>
  );
};

export default HomeHeroText;
