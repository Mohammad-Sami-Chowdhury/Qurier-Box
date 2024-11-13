import React from "react";
import test from "../../assets/test.svg";
import { FaStar } from "react-icons/fa6";
import avatar from "../../assets/avatar.png";
import Slider from "react-slick";

const Tastimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-[#FFF1DC] pb-[266px]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-center gap-[38px] items-center pb-[90px]">
          <img src={test} alt="test" />
          <div>
            <h6 className="text-[#F95C19] font-oxa font-bold text-[32px] text-center">
              TESTIMONIAL
            </h6>
            <p className="text-black font-extrabold text-[39px] text-center">
              Our Awesome Clients
            </p>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <div className="bg-white px-[39px] pt-[39px] pb-[55px] rounded-[16px] w-[872px] mx-auto">
              <h6 className="text-[25px] text-[#F95C19] font-bold pb-[11px] font-oxa">
                Fantastic service!
              </h6>
              <p className="text-[16px] text-[#464558] w-[800px] mx-auto leading-normal pb-[28px]">
                I purchased a phone from an e-commerce site, and this courier
                service provider assisted me in getting it delivered to my home.
                I received my phone within one day, and I was really satisfied
                with their service when I received it. They are really quick and
                dependable. They give me with the option of real-time delivery
                status, which allows me to track the progress of my goods
                delivery. I get a lot of questions from call center support and
                key account managers. They come highly recommended. Confidently
                say that they are really reliable.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex text-[20px] text-[#F95C19] gap-[7px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex gap-[13px] items-center">
                  <div>
                    <h4 className="text-base font-bold text-right">
                      Yves Tanguy
                    </h4>
                    <p className="text-base text-right">Chief Executive, DLF</p>
                  </div>
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white px-[39px] pt-[39px] pb-[55px] rounded-[16px] w-[872px] mx-auto">
              <h6 className="text-[25px] text-[#F95C19] font-bold pb-[11px] font-oxa">
                Fantastic service!
              </h6>
              <p className="text-[16px] text-[#464558] w-[800px] mx-auto leading-normal pb-[28px]">
                I purchased a phone from an e-commerce site, and this courier
                service provider assisted me in getting it delivered to my home.
                I received my phone within one day, and I was really satisfied
                with their service when I received it. They are really quick and
                dependable. They give me with the option of real-time delivery
                status, which allows me to track the progress of my goods
                delivery. I get a lot of questions from call center support and
                key account managers. They come highly recommended. Confidently
                say that they are really reliable.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex text-[20px] text-[#F95C19] gap-[7px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex gap-[13px] items-center">
                  <div>
                    <h4 className="text-base font-bold text-right">
                      Yves Tanguy
                    </h4>
                    <p className="text-base text-right">Chief Executive, DLF</p>
                  </div>
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white px-[39px] pt-[39px] pb-[55px] rounded-[16px] w-[872px] mx-auto">
              <h6 className="text-[25px] text-[#F95C19] font-bold pb-[11px] font-oxa">
                Fantastic service!
              </h6>
              <p className="text-[16px] text-[#464558] w-[800px] mx-auto leading-normal pb-[28px]">
                I purchased a phone from an e-commerce site, and this courier
                service provider assisted me in getting it delivered to my home.
                I received my phone within one day, and I was really satisfied
                with their service when I received it. They are really quick and
                dependable. They give me with the option of real-time delivery
                status, which allows me to track the progress of my goods
                delivery. I get a lot of questions from call center support and
                key account managers. They come highly recommended. Confidently
                say that they are really reliable.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex text-[20px] text-[#F95C19] gap-[7px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex gap-[13px] items-center">
                  <div>
                    <h4 className="text-base font-bold text-right">
                      Yves Tanguy
                    </h4>
                    <p className="text-base text-right">Chief Executive, DLF</p>
                  </div>
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Tastimonial;
