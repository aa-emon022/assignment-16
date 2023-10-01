import React from "react";

export default function Section() {
 const textName={
  fontFamily: "Poppins, sans-serif", // Use "sans-serif" as a fallback font
  fontWeight: 600,
 }
 const textName1={
  fontFamily: "Avenir, sans-serif", // Use "sans-serif" as a fallback font
  fontWeight: 100,
 }
  return (
    <>
      <div className="flex flex-col  items-center h-[31.1rem] ">
        <div className="position relative top-[5rem]">
          <div className="pb-[2rem] ml-[13rem]">
            <h1 className="text-[#20B15A]"style={textName}>SUBSCRIBE</h1>
          </div>
          <div className="ml-[3rem] text-[2rem]" style={textName}>
            <h1>Subscribe to get the latest <br/>news about us</h1>
          </div>
          <div>
            <p className="text-[#8B8B8B] sm:ml-[2rem]" style={textName1} >
              Please drop your email below to get daily updates about what we do
            </p>
          </div>
          <div className="flex mt-[2.7rem] sm:ml-[2.5rem]">
            <div className=" border-[#000000] ">
              <input className="border-2 border-[#000000] sm:w-[34rem] sm:p-[.81rem] position relative sm:left-[-1.7rem] " type="search" placeholder="Enter Your Email Address" />
            </div>
            <div className="position absolute left-[19rem] sm:left-[24.4rem]">
              <button className="border-2 bg-[#F55F1D] sm:h-[2.80rem] w-[8rem] rounded-[1rem] position relative top-[.30rem]">
                <h1 className="text-white">Subscribe</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
