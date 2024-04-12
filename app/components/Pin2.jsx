"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3d-pin";

const AnimatedPinDemo = () => {
  return (
    <div className="h-[40rem] flex gap-10 flex-row justify-center ">
      <div className="mt-[-100px]">
        {" "}
        <PinContainer
          title="Origin : Brazil"
          href="https://youtu.be/BcP9AMeeJmg?si=lwOlWfPcQkwtYe_m"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Brazilian Jiu-Jitsu (BJJ)
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that
                evolved from Kodokan Judo, particularly through the efforts of
                the Gracie family in Brazil.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 0">
              <a href="https://youtu.be/23ARJNmZ00w?si=utz28y2BabvD2Pj3">
                <img
                  src="https://cdn.evolve-university.com/wp-content/uploads/2022/02/rodrigo-and-thales-bjj-lasso-guard.jpg"
                  alt=""
                  className=""
                />
              </a>
            </div>
          </div>
        </PinContainer>
      </div>

      <div className="mt-[-100px]">
        <PinContainer
          title="Origin: Japan and the United States"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              KickBoxing
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Kickboxing originated as a fusion of traditional martial arts,
                primarily karate, with Western boxing. It emerged in the
                mid-20th century in Japan and the United States.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 0">
              <a href="https://youtu.be/uV-C054FUgc?si=r7sgupOFRMItodtX">
                <img
                  src="https://cdn.onefc.com/wp-content/uploads/2019/02/Nieky-Holzken-DSC_1483.jpg"
                  alt=""
                  className=""
                />
              </a>
            </div>
          </div>
        </PinContainer>
      </div>

      <div className="mt-[-100px]">
        <PinContainer
          title="Origin: Korea"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Taekwondo
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Taekwondo is a Korean martial art that traces its roots back to
                ancient Korean martial arts such as Taekkyeon and Subak. It
                gained popularity and formalization in the 20th century.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 0">
              <a href="https://youtu.be/AlN0CdPUkMc?si=wtSljs_q3cQzP9qY">
                <img
                  src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/qr0fn2gdvqjfonaam78q"
                  alt=""
                  className=""
                />
              </a>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default AnimatedPinDemo;
