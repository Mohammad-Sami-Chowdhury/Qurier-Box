import React from "react";
import { useState } from "react";
import video from "../../assets/video.mp4";
import play from "../../assets/play.svg";
import thub from "../../assets/thub.png";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <section className="bg-[#FFF1DC] pb-[150px]">
      <div className="max-w-container mx-auto">
        <div className="relative">
          {!isPlaying ? (
            <div className="relative cursor-pointer" onClick={handlePlayClick}>
              <img className="w-full h-[580px]" src={thub} alt="thub" />
              <div className="absolute top-0 left-0 inset-0 bg-[rgba(10,9,13,0.8)] pt-[126px] pb-[168px] rounded-[16px]">
                <img className="mx-auto" src={play} alt="play" />
                <h5 className="text-[32px] text-[#F95C19] font-bold font-oxa text-center pb-[28px] pt-[19px]">
                  FASTEST DELIVERY
                </h5>
                <p className="text-white text-[25px] w-[673px] leading-normal mx-auto text-center">
                  You can get your valuable item in the fastest period of time
                  with safety. Because your emergency is our first priority.
                </p>
              </div>
            </div>
          ) : (
            <video
              className="w-full h-[580px] rounded-[16px] relative"
              src={video}
              autoPlay
              loop
              muted
            ></video>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
