import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import "./service.css";

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 640, // ছোট স্ক্রীনের জন্য (ট্যাবলেট এবং মোবাইল)
        settings: {
          slidesToShow: 1, // শুধুমাত্র ১টি স্লাইড দেখাবে
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#FFF1DC] md:px-0 px-4">
      <div className="max-w-container mx-auto">
        <h2 className="md:text-[32px] text-[28px] text-[#F95C19] font-bold text-center font-oxa">
          SERVICES
        </h2>
        <h3 className="md:text-[38px] text-[32px] text-[#11111D] font-extrabold text-center pb-[50px] md:pb-[86px]">
          Our services for you
        </h3>
        <Slider {...settings}>
          {/* <div className="flex justify-between"> */}
          <div className="bg-white md:px-[60px] md:pt-[67px] px-12 pt-12 pb-9 md:pb-[50px] rounded-2xl">
            <img className="mx-auto" src={icon1} alt="icon1" />
            <h4 className="md:text-[25px] text-lg font-extrabold text-[#3F3D56] text-center py-[32px]">
              Business Services
            </h4>
            <p className="md:text-base text-[13px] md:text-left text-center leading-normal md:w-[300px] w-[250px] text-[#3F3D56] pb-[32px]">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
            <ul className="list-disc marker:text-[#F95C19] pl-[16px]">
              <li className="pb-3">Corporate goods</li>
              <li className="pb-3">Shipment</li>
              <li>Accesories</li>
            </ul>
            <button className="font-oxa flex mx-auto md:text-[20px] text-base hover:bg-[#F95C19] hover:text-white duration-500 mt-[60px] border-[1px] border-[#F95C19] text-[#F95C19] rounded-[5px] px-16 py-2 md:px-[96px] md:py-[12px] font-bold">
              <a href="#">Learn more</a>
            </button>
          </div>
          <div className="bg-white md:px-[60px] md:pt-[67px] px-12 pt-12 pb-9 md:pb-[50px] rounded-2xl">
            <img className="mx-auto" src={icon2} alt="icon1" />
            <h4 className="md:text-[25px] text-lg font-extrabold text-[#3F3D56] text-center py-[32px]">
              Business Services
            </h4>
            <p className="md:text-base text-[13px] md:text-left text-center leading-normal md:w-[300px] w-[250px] text-[#3F3D56] pb-[32px]">
              Offering home delivery around the city, where your products will
              be at your doorstep within 48-72 hours.
            </p>
            <ul className="list-disc marker:text-[#F95C19] pl-[16px]">
              <li className="pb-3">Personal items</li>
              <li className="pb-3">Percels</li>
              <li>Documents</li>
            </ul>
            <button className="font-oxa flex mx-auto md:text-[20px] text-base hover:bg-[#F95C19] hover:text-white duration-500 mt-[60px] border-[1px] border-[#F95C19] text-[#F95C19] rounded-[5px] px-16 py-2 md:px-[96px] md:py-[12px] font-bold">
              <a href="#">Learn more</a>
            </button>
          </div>
          <div className="bg-white md:px-[60px] md:pt-[67px] px-12 pt-12 pb-9 md:pb-[50px] rounded-2xl">
            <img className="mx-auto" src={icon3} alt="icon1" />
            <h4 className="md:text-[25px] text-lg font-extrabold text-[#3F3D56] text-center py-[32px]">
              Business Services
            </h4>
            <p className="md:text-base text-[13px] md:text-left text-center leading-normal md:w-[300px] w-[250px] text-[#3F3D56] pb-[32px]">
              You can trust us to safely deliver your most sensitive documents
              to the specific area in a short time.
            </p>
            <ul className="list-disc marker:text-[#F95C19] pl-[16px]">
              <li className="pb-3">Gifts</li>
              <li className="pb-3">Package</li>
              <li>Documents</li>
            </ul>
            <button className="font-oxa flex mx-auto md:text-[20px] text-base hover:bg-[#F95C19] hover:text-white duration-500 mt-[60px] border-[1px] border-[#F95C19] text-[#F95C19] rounded-[5px] px-16 py-2 md:px-[96px] md:py-[12px] font-bold">
              <a href="#">Learn more</a>
            </button>
          </div>
          {/* </div> */}
        </Slider>
        <div className="md:flex justify-between hidden">
          <div className="bg-white px-[60px] pt-[67px] pb-[50px] rounded-2xl">
            <img className="mx-auto" src={icon1} alt="icon1" />
            <h4 className="text-[25px] font-extrabold text-[#3F3D56] text-center py-[32px]">
              Business Services
            </h4>
            <p className="text-base leading-normal w-[300px] text-[#3F3D56] pb-[32px]">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
            <ul className="list-disc marker:text-[#F95C19] pl-[16px]">
              <li className="pb-3">Corporate goods</li>
              <li className="pb-3">Shipment</li>
              <li>Accesories</li>
            </ul>
            <button className="font-oxa flex mx-auto hover:bg-[#F95C19] hover:text-white duration-500 mt-[60px] border-[1px] border-[#F95C19] text-[#F95C19] rounded-[5px] px-[96px] py-[12px] font-bold">
              <a href="#">Learn more</a>
            </button>
          </div>
          <div className="bg-white px-[60px] pt-[67px] pb-[50px] rounded-2xl">
            <img className="mx-auto" src={icon2} alt="icon1" />
            <h4 className="text-[25px] font-extrabold text-[#3F3D56] text-center py-[32px]">
              Business Services
            </h4>
            <p className="text-base leading-normal w-[300px] text-[#3F3D56] pb-[32px]">
              Offering home delivery around the city, where your products will
              be at your doorstep within 48-72 hours.
            </p>
            <ul className="list-disc marker:text-[#F95C19] pl-[16px]">
              <li className="pb-3">Personal items</li>
              <li className="pb-3">Percels</li>
              <li>Documents</li>
            </ul>
            <button className="font-oxa flex mx-auto hover:bg-[#F95C19] hover:text-white duration-500 mt-[60px] border-[1px] border-[#F95C19] text-[#F95C19] rounded-[5px] px-[96px] py-[12px] font-bold">
              <a href="#">Learn more</a>
            </button>
          </div>
          <div className="bg-white px-[60px] pt-[67px] pb-[50px] rounded-2xl">
            <img className="mx-auto" src={icon3} alt="icon1" />
            <h4 className="text-[25px] font-extrabold text-[#3F3D56] text-center py-[32px]">
              Business Services
            </h4>
            <p className="text-base leading-normal w-[300px] text-[#3F3D56] pb-[32px]">
              You can trust us to safely deliver your most sensitive documents
              to the specific area in a short time.
            </p>
            <ul className="list-disc marker:text-[#F95C19] pl-[16px]">
              <li className="pb-3">Gifts</li>
              <li className="pb-3">Package</li>
              <li>Documents</li>
            </ul>
            <button className="font-oxa flex mx-auto hover:bg-[#F95C19] hover:text-white duration-500 mt-[60px] border-[1px] border-[#F95C19] text-[#F95C19] rounded-[5px] px-[96px] py-[12px] font-bold">
              <a href="#">Learn more</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
