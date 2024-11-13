import React from "react";
import footer from "../../assets/footerlogo.png";

const FooterTwo = () => {
  return (
    <footer className="bg-[#2F2E41] py-[55px]">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-[50%]">
            <img src={footer} alt="" />
            <p className="text-[#9291A1] text-base leading-normal w-[190px] pt-[12px] font-semibold">
              The most trusted Courier company in your area.
            </p>
          </div>
          <div className="w-[50%] flex justify-between">
            <div>
              <h2 className="text-[20px] text-white font-bold font-oxa">
                Other links
              </h2>
              <ul className="text-[#9291A1] text-base pt-[22px] font-semibold">
                <li className="pb-[7px] hover:text-white duration-500">
                  <a href="#">Blogs</a>
                </li>
                <li className="pb-[7px] hover:text-white duration-500">
                  <a href="#">Movers website</a>
                </li>
                <li className="hover:text-white duration-500">
                  <a href="#">Traffic Update</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] text-white font-bold font-oxa">
                Services
              </h2>
              <ul className="text-[#9291A1] text-base pt-[22px] font-semibold">
                <li className="pb-[7px] hover:text-white duration-500">
                  <a href="#">Corporate goods</a>
                </li>
                <li className="pb-[7px] hover:text-white duration-500">
                  <a href="#">Artworks</a>
                </li>
                <li className="hover:text-white duration-500">
                  <a href="#">Documents</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] text-white font-bold font-oxa">
                Customer Care
              </h2>
              <ul className="text-[#9291A1] text-base pt-[22px] font-semibold">
                <li className="pb-[7px] hover:text-white duration-500">
                  <a href="#">About Us</a>
                </li>
                <li className="pb-[7px] hover:text-white duration-500">
                  <a href="#">Contact US</a>
                </li>
                <li className="hover:text-white duration-500">
                  <a href="#">Get Update</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
