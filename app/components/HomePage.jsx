// HomePage.js
"use client"
import React from "react";
import Youtube from "./Youtube";

const HomePage = () => {
  return (
    <>
      <div className="p-6 flex flex-row bg-black">
        {/* 2 */}
        <div className=" m-[-22px]">
          <div className=" w-1/2 h-full p-12 border-x-black ">
            <YouTube videoId="JuBBIJ7adjM" className="" />
            {/* <img src="/img" alt="" /> */}
          </div>
        </div>
        {/* Divider */}
        <div class="flex flex-1">
          <div class="inline-block h-[550px]  w-0.5 self-stretch ml-[21px] mt-[-23px] bg-white"></div>
        </div>
        {/* 2 */}
        <div className="w-1/2 flex justify-center flex-col">
          <h1 className="text-white text-7xl font-bold pl-10 mt-12">MMA</h1>
          <div className="p-10">
            <p className="text-xl text-gray-400 font-bold mt-[-8%] font-cursive">
              MMA（Mixed Martial
              Arts）は、さまざまな国や武道の伝統から進化したスポーツで、現代の形はブラジル、日本、そしてアメリカの影響を受けています。
              ブラジルでは、グレイシー家がブラジリアン柔術（BJJ）を創始し、普及させることで、現代のMMAの発展に重要な役割を果たしました。BJJはグラウンドファイトやサブミッションを重視するスタイルで知られています。
              日本では、パンクラスやシュートなどの団体が、さまざまな武道の要素を組み合わせた総合格闘技の競技を先駆け的に展開しました。
              アメリカでは、
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[-40px] bg-black">
        <hr class="w-screen  h-0.5  my-4 bg-white border-0 rounded md:my-10 " />
      </div>
    </>
  );
};

export default HomePage;
