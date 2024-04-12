"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const BackgroundGradientDemo =()=> {
  return (
    <>
      <h1 className="text-4xl text-right mr-12 font-bold text-white mt-[-300px] pb-10">
        Recent MMA Fights
      </h1>

      <div className="flex flex-row justify-center gap-12 pb-6">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/img1.png"
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Justin Gaethje vs Dustin Poirier <br />| FULL FIGHT | <br /> UFC 300
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            watch the full fight between Justin Gaethje vs Dustin Poirier 2
            ahead of Gaethje's fight against Max Holloway at UFC 300 on April
            13th in Las Vegas. <br />
            The Fight was Intense <br /> Watch Now
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Watch Now</span>
            <a href="https://youtu.be/o_9Ql-ra94I?si=BhpruYEnJjZDZn2H">
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                Play
              </span>
            </a>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/img2.png"
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Alex Pereira vs Jiri Prochazka <br /> | FULL FIGHT | <br />
            UFC 300
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            watch the full fight between Justin Gaethje vs Dustin Poirier 2
            ahead of Gaethje's fight against Max Holloway at UFC 300 on April
            13th in Las Vegas. <br />
            The Fight was Intense <br /> Watch Now
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Watch Now</span>
            <a href="https://youtu.be/e4Dq6KznFcM?si=xSpAMza_LpK1hm2u">
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                Play
              </span>
            </a>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/img2.png"
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Alex Pereira vs Jiri Prochazka <br /> | FULL FIGHT | <br />
            UFC 301
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            watch the full fight between Justin Gaethje vs Dustin Poirier 2
            ahead of Gaethje's fight against Max Holloway at UFC 300 on April
            13th in Las Vegas. <br />
            The Fight was Intense <br /> Watch Now
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Watch Now</span>
            <a href="https://youtu.be/e4Dq6KznFcM?si=xSpAMza_LpK1hm2u">
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                Play
              </span>
            </a>
          </button>
        </BackgroundGradient>
      </div>
    </>
  );
}

export default BackgroundGradientDemo;