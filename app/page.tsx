import Image from "next/image";
import HomePage from "@/app/components/HomePage"
import About from "@/app/components/About";
import Khabib from "@/app/components/Khabib";
import MartialArts from "@/app/components/MartialArts";
import Gallery from "@/app/components/Gallery";
import Pin from "@/app/components/Pin";
import Pin2 from "@/app/components/Pin2";
import Head from "@/app/components/Head"
import Hero from "@/app/components/Hero";
import Header from "@/app/components/Header";
import Cards from "@/app/components/Cards"

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
      <HomePage />
      <About />
      <Khabib />
      <MartialArts />
      <Gallery />
      <Head/>
      <Pin />
      <Pin2 />
      <Cards/>
    </>
  );
}
