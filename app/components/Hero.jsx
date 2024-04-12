"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/app/components/ui/images-slider";

const ImagesSliderDemo=()=> {
  const images = [
    "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2018/12/jose-aldo-chad-mendes-ufc-179.jpg?w=1000&h=600&crop=1",
    "https://cdn.evolve-mma.com/wp-content/uploads/2021/11/benefit-of-mma.jpg",
    "https://cdn.onefc.com/wp-content/uploads/sites/7/2022/11/Kiamrian-Abbasov-Christian-Lee-ONE-on-Prime-Video-4-1920X1280-143.jpg",
  ];
  return (

   
      <ImagesSlider className="h-[40rem] w-screen" images={images}>
        
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Where Every Strike Tells a Story: MMA, <br />
            the Ultimate Combat Experience{" "}
          </motion.p>
         
        </motion.div>
      </ImagesSlider>
   
  );
}

export default ImagesSliderDemo;