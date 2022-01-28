import React from "react";
import Hero from "../Components/Hero/Hero";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import Map from "../Components/Map/Map";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Map />
    </>
  );
}
