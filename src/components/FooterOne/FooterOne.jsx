import React from "react";
import { useState } from "react";

const FooterOne = () => {
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
    <footer className="bg-[#222132] py-[84px]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[39px] text-white font-extrabold">
              Get an update every week
            </h3>
            <p className="text-base text-[#C5C5D2] font-medium w-[500px]">
              We ensure that your product is delivered in the safest possible
              manner, at the correct location, at the right time.
            </p>
          </div>
          <div>
            <h5 className="text-[#F95C19] font-bold font-oxa text-[18px] pb-[13px]">
              SUBSCRIBE TO NEWSLETTER
            </h5>
            <div className="flex items-center gap-[16px]">
              <input
                className="bg-transparent w-[386px] rounded-[5px] border-[1px] outline-none border-[#C5C5D2] py-[15px] pl-[18px]"
                type="text"
                value={email}
                onChange={handleChangee}
                placeholder="Enter your mail"
              />
              <button className="px-[20px] font-oxa font-bold py-[12px] border-[1px] border-[#F95C19] rounded-[5px] bg-[#F95C19] text-white duration-500 hover:text-[#F95C19] hover:bg-transparent hover:border-[1px] hover:border-[#F95C19]">
                Subscribe
              </button>
            </div>
            {error1 && (
              <p className="text-red-500 text-base italic mt-2">{error1}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
