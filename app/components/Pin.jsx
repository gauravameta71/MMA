"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3d-pin";

const AnimatedPinDemo = () => {
  return (
    <div className="h-[40rem] flex gap-10 flex-row justify-center ">
      <PinContainer
        title="Origin : Island of Okinawa, Japan"
        href="https://youtu.be/BcP9AMeeJmg?si=lwOlWfPcQkwtYe_m"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Karate
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A Japanese martial art and Olympic sport that focuses on grappling
              and throwing techniques to subdue opponents.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 0">
            <a href="https://youtu.be/23ARJNmZ00w?si=utz28y2BabvD2Pj3">
              <img
                src="https://miro.medium.com/v2/resize:fit:814/1*Z6lRRtUKL-fVr3ccDA6MGQ.jpeg"
                alt=""
                className=""
              />
            </a>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="Origin: Ancient Mesopotamia and Egypt"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Boxing
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A combat sport where two opponents punch each other with gloved
              fists, aiming to score points by landing clean hits on the
              opponent.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 0">
            <a href="https://youtu.be/uV-C054FUgc?si=r7sgupOFRMItodtX">
              <img
                src="https://www.essentiallysports.com/stories/boxing-news-youngest-boxing-champions-in-history-mike-tyson-wilfred-benitez-and-more/assets/41.jpeg"
                alt=""
                className=""
              />
            </a>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="Origin: Thailand"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Muay Thai
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Muay Thai Also known as Thai boxing, it is a combat sport from
              Thailand that incorporates striking techniques using fists,
              elbows, knees, and shins.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 0">
            <a href="https://youtu.be/AlN0CdPUkMc?si=wtSljs_q3cQzP9qY">
              <img
                src="https://www.tigermuaythai.com/wp-core/wp-content/uploads/ancient-mt.jpg"
                alt=""
                className=""
              />
            </a>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default AnimatedPinDemo;