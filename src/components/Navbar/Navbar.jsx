import React from "react";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="py-4 bg-gradient-to-r from-[#fff1dc80] to-[#FFF1DC]">
      <div className="max-w-container mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center gap-[45px]">
            <div>
              <ul className="flex gap-[25px] text-base font-bold text-[#817382]">
                <li className="hover:text-[#F95C19] hover:font-extrabold duration-500">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-[#F95C19] hover:font-extrabold duration-500">
                  <a href="#">Our services</a>
                </li>
                <li className="hover:text-[#F95C19] hover:font-extrabold duration-500">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:text-[#F95C19] hover:font-extrabold duration-500">
                  <a href="#">What’s new?</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-[10px] items-center">
              <button className="bg-[#FFEDC9] text-[#FFAF0F] p-[14px] rounded-[5px]">
                <a href="#">
                  <CiSearch size={26} />
                </a>
              </button>
              <button className="bg-[#FFE4D9] rounded-[5px] text-[#F95C19] font-oxa font-bold text-[20px] px-[20px] py-[12px] duration-500 hover:text-[#FFE4D9] hover:bg-[#F95C19]">
                <a href="#">Contact us</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
