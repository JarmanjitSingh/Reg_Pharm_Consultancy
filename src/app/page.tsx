"use client";
import FifthSection from "@/sections/fifth-section";
import FirstSection from "@/sections/first-section";
import FourthSection from "@/sections/fourth-section";
import SecondSection from "@/sections/second-section";
import SixthSection from "@/sections/sixth-section";
import ThirdSection from "@/sections/third-section";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Home() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-M48MQK9S55"); // Replace with your Measurement ID

    // Track the initial page view
    ReactGA.send("pageview");
  }, []);

  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </>
  );
}
