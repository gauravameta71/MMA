import React from "react";

const About = () => {
  return (
    <div className=" p-20 bg-black flex flex-col mt-[-40px]">
      <h1 className="text-white font-bold text-4xl p-16 flex justify-center items-center text-center">
        MMA ~ Miixed Martial Arts
      </h1>
      <p className="text-xl text-gray-400 pl-8 text-center">
        <span className="font-bold">Mixed Martial Arts</span> (MMA) is a
        full-contact combat sport that allows a wide variety of fighting
        techniques and skills from various martial arts and combat sports
        disciplines. It originated in the early 20th century and gained
        popularity through events like Vale Tudo in Brazil and Shooto in Japan.{" "}
        <br /> <br /> However, its modern form and widespread recognition began
        with the establishment of the Ultimate Fighting Championship (UFC) in
        1993. The UFC, founded by Rorion Gracie, Art Davie, and Bob Meyrowitz,
        organized the first event in Denver, Colorado, to determine the most
        effective martial art in real fighting situations. The early UFC events
        featured fighters from different disciplines, including Brazilian
        Jiu-Jitsu, wrestling, Muay Thai, boxing, and more, competing in a
        tournament-style format with minimal rules. <br /> <br /> Over time, MMA
        evolved into a regulated sport with unified rules and weight classes,
        ensuring fighter safety and fair competition. Promotions like Bellator
        MMA, ONE Championship, and the Professional Fighters League (PFL) joined
        the UFC in promoting MMA events globally.
      </p>
    </div>
  );
};

export default About;
