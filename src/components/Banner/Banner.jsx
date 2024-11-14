import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <section className="bg-[#FFF1DC] md:py-[170px] py-[50px]">
      <div className="max-w-container mx-auto">
        <div className="md:flex justify-between items-center ml-3 md:ml-0">
          <div>
            <h1 className="text-[#261134] md:w-[516px] md:text-5xl leading-normal text-[28px]">
              A trusted provider of
              <span className="font-extrabold"> courier services.</span>
            </h1>
            <p className="text-[#4d4d4d] w-[330px] md:text-xl text-base pt-[16px] md:pb-[41px] pb-[30px]">
              We deliver your products safely to your home in a reasonable time.
            </p>
            <button className="flex font-bold md:text-[20px] text-base items-center duration-500 text-white font-oxa bg-[#F95C19] rounded-[5px] md:px-[20px] md:py-[12px] px-[13px] py-[8px] gap-1 hover:bg-[#FFF1DC] hover:text-[#F95C19]">
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
