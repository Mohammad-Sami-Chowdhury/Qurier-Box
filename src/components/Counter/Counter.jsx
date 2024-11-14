import React from "react";
import CountUp from "react-countup";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

const Counter = () => {
  const [isCounting, setIsCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        } else {
          setIsCounting(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="bg-[#FFF1DC] pt-[172px] pb-[162px] md:px-0 px-4">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between flex-wrap">
          <div ref={sectionRef} className="pb-10 md:pb-0">
            <img className="mx-auto" src={icon1} alt="icon1" />
            <p className="text-[39px] font-extrabold text-[#F95C19] font-primary text-center">
              {isCounting && <CountUp end={26} className="font-oxa" />}+
            </p>
            <p className="font-semibold text-[20px] text-[#4D4D4D] text-center">
              Awards won
            </p>
          </div>
          <div className="pb-10 md:pb-0">
            <img className="mx-auto pb-[20px]" src={icon2} alt="icon1" />
            <p className="text-[39px] font-extrabold text-[#F95C19] font-primary text-center">
              {isCounting && <CountUp end={65} className="font-oxa" />}+
            </p>
            <p className="font-semibold text-[20px] text-[#4D4D4D] text-center">
              States covered
            </p>
          </div>
          <div className="pb-10 md:pb-0">
            <img className="mx-auto pb-[20px]" src={icon3} alt="icon1" />
            <p className="text-[39px] font-extrabold text-[#F95C19] font-primary text-center">
              {isCounting && <CountUp end={689} className="font-oxa" />}
              K+
            </p>
            <p className="font-semibold text-[20px] text-[#4D4D4D] text-center">
              Happy clients
            </p>
          </div>
          <div className="pb-10 md:pb-0">
            <img className="mx-auto pb-[20px]" src={icon4} alt="icon1" />
            <p className="text-[39px] font-extrabold text-[#F95C19] font-primary text-center">
              {isCounting && <CountUp end={130} className="font-oxa" />}
              M+
            </p>
            <p className="font-semibold text-[20px] text-[#4D4D4D] text-center">
              Goods delivered
            </p>
          </div>
          <div className="mx-auto md:mx-0">
            <img className="mx-auto pb-[20px]" src={icon5} alt="icon1" />
            <p className="text-[39px] font-extrabold text-[#F95C19] font-primary text-center">
              {isCounting && <CountUp end={130} className="font-oxa" />}
              M+
            </p>
            <p className="font-semibold text-[20px] text-[#4D4D4D] text-center">
              Business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
