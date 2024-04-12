// HomePage.js
"use client";
import React from "react";


const HomePage = () => {
  return (
    <>
      <div className="p-6 flex flex-row bg-black">
        {/* 2 */}
        {/* <div className="bg-orange-50 m-[-22px]"> */}
        <div className="bg-beige-300  w-1/2 border-x-black bg-orange-50 ">
          <img src="/img.png" alt="" className="border-2" />
        </div>
        {/* </div> */}

        {/* 2 */}
        <div className="w-1/2 flex justify-center flex-col ">
          <h1 className="text-red-600 text-7xl font-bold pl-10 mt-12">UFC</h1>
          <div className="p-10">
            <p className="text-xl text-gray-400  mt-[-6%] font-cursive">
              Khabib Nurmagomedov's fighting style was defined by his
              unparalleled wrestling dominance, suffocating ground control, and
              relentless pressure. Utilizing his Sambo background, he executed
              flawless takedowns and imposed his will on opponents with
              precision. Once on the ground, Khabib's ground-and-pound was
              relentless, often leading to submission opportunities. His mental
              toughness and strategic prowess complemented his physical
              abilities, making him one of the most formidable fighters in MMA
              history.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[-40px] bg-white">
        <hr class="w-screen  h-0.5  my-4 bg-black border-0 rounded md:my-10 " />
      </div>
    </>
  );
};

export default HomePage;
