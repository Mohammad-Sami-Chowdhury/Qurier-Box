import React from "react";
import { useState } from "react";
import girl from "../../assets/girl.png";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    // Check if the input contains any numbers
    if (/\d/.test(value)) {
      setError("Please enter only text. Numbers are not allowed.");
    } else {
      setError("");
    }

    setInputValue(value);
  };

  const [email, setEmail] = useState("");
  const [error1, setError1] = useState("");

  // Email Validation Function
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  // Handle Email Change
  const handleChangee = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Check if input is a valid email
    if (inputEmail === "" || validateEmail(inputEmail)) {
      setError1(""); // No error if valid email
    } else {
      setError1("Please enter a valid email address"); // Show error if not valid
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation on submit
    if (validateEmail(email)) {
      alert("Email is valid and submitted");
      // Here you can add additional submission logic
    } else {
      setError1("Please enter a valid email address");
    }
  };
  return (
    <section className="bg-[#FFF1DC] pb-[170px]">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-center gap-[30px]">
          <div>
            <img src={girl} alt="girl" />
            <h2 className="text-[#F95C19] font-oxa font-bold text-[24px] pt-[14px]">
              REQUEST A CALLBACK
            </h2>
            <h3 className="font-extrabold text-[39px] leading- w-[412px] pt-[20px] pb-[9px]">
              We will contact in the shortest time.
            </h3>
            <p className="font-semibold text-[25px] text-[#9291A1] ">
              Monday to Friday, 9am-5pm.
            </p>
          </div>
          <div>
            <div>
              <input
                className="py-[15px] pl-[19px] rounded-[8px] border-[1px] border-[#C5C5D2] bg-transparent w-[423px] outline-[#F95C19] mb-[16px]"
                value={inputValue}
                onChange={handleChange}
                type="text"
                placeholder="Name"
              />
              {error && (
                <p className="text-red-500 text-base italic">{error}</p>
              )}
            </div>
            <div>
              <input
                className="py-[15px] pl-[19px] rounded-[8px] border-[1px] border-[#C5C5D2] bg-transparent w-[423px] outline-[#F95C19] mb-[16px]"
                value={email}
                onChange={handleChangee}
                type="text"
                placeholder="Email"
              />
              {error1 && (
                <p className="text-red-500 text-base italic ">{error1}</p>
              )}
            </div>
            <div>
              <input
                className="py-[15px] pl-[19px] rounded-[8px] border-[1px] border-[#C5C5D2] bg-transparent w-[423px] h-[154px] outline-[#F95C19] placeholder:absolute placeholder:top-[20px] placeholder:left-[15px] "
                type="text"
                placeholder="Message"
              />
            </div>
            <button className="flex gap-[10px] duration-500 hover:bg-transparent hover:text-[#F95C19] hover:border-[1px] hover:border-[#F95C19] px-[131px] py-[12px] bg-[#F95C19] text-white font-oxa font-bold text-[20px] rounded-[16px] mt-[66px] justify-center items-center">
              <a href="#">Send Message</a>
              <FaTelegramPlane size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
