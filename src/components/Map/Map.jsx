import React from "react";
import { CiLocationOn, CiClock2, CiMail } from "react-icons/ci";
import { FaFacebookSquare, FaTwitterSquare, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Map = () => {
  return (
    <section className="pb-[183px] bg-[#FFF1DC]">
      <div className="max-w-container mx-auto">
        <div>
          <h2 className="text-[32px] font-bold font-oxa text-[#F95C19] text-center">
            FIND US
          </h2>
          <h3 className="text-[39px] font-extrabold text-black text-center pb-[85px]">
            Access us easily
          </h3>
        </div>
        <div className="flex justify-center">
          <iframe
            className="rounded-l-[16px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58419.020187670336!2d90.33669056141048!3d23.7762916774876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1731509125770!5m2!1sen!2sbd"
            width="761"
            height="428"
            loading="lazy"
          ></iframe>
          <div className="bg-[#FEFCFA] h-[428px] pt-[88px] pb-[81px] pl-[85px] rounded-r-[16px] pr-[126px]">
            <h5 className="text-[20px] font-bold text-[#5C5B6C] pb-[37px]">
              Contact with us
            </h5>
            <div className="flex items-center gap-[13px] pb-[15px]">
              <CiLocationOn className="text-[#FFAF0F]" size={22} />
              <p className="text-base text-[#5C5B6C]">
                2277 Lorem Ave, San Diego, CA 22553
              </p>
            </div>
            <div className="flex items-center gap-[13px] pb-[15px]">
              <CiClock2 className="text-[#FFAF0F]" size={22} />
              <p className="text-base text-[#5C5B6C] w-[285px]">
                Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm
              </p>
            </div>
            <div className="flex items-center gap-[13px]">
              <CiMail className="text-[#FFAF0F]" size={22} />
              <p className="text-base text-[#5C5B6C]">info@quriarbox.com</p>
            </div>
            <div className="text-[24px] flex gap-[24px] pt-[51px] text-[#AFAEBC]">
              <FaFacebookSquare className="hover:text-[#F95C19] duration-500" />
              <AiFillInstagram className="hover:text-[#F95C19] duration-500" />
              <FaTwitterSquare className="hover:text-[#F95C19] duration-500" />
            </div>
          </div>
        </div>
        <button className="flex border-[1px] border-[#F95C19] gap-[12px] duration-500 hover:text-[#F95C19] hover:bg-transparent hover:border-[1px] hover:border-[#F95C19] text-white bg-[#F95C19] px-[113px] py-[13px] font-oxa items-center rounded-[5px] mx-auto mt-[30px]">
          <FaPhoneAlt />
          <a href="#">Call us to delivery 123-456789</a>
        </button>
      </div>
    </section>
  );
};

export default Map;
