import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <section className="bg-[#FFF1DC] py-[170px]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#261134] w-[516px] text-5xl leading-normal">
              A trusted provider of{" "}
              <span className="font-extrabold"> courier services.</span>
            </h1>
            <p className="text-[#4d4d4d] w-[330px] text-xl pt-[16px] pb-[41px]">
              We deliver your products safely to your home in a reasonable time.
            </p>
            <button className="flex font-bold items-center duration-500 text-white font-oxa bg-[#F95C19] rounded-[5px] px-[20px] py-[12px] gap-1 hover:bg-[#FFF1DC] hover:text-[#F95C19]">
              <a href="#">Get started</a>
              <FaArrowRightLong />
            </button>
          </div>
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
