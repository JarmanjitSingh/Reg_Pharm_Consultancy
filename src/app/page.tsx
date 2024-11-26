"use client";
import FifthSection from "@/sections/fifth-section";
import FirstSection from "@/sections/first-section";
import FourthSection from "@/sections/fourth-section";
import SecondSection from "@/sections/second-section";
import SixthSection from "@/sections/sixth-section";
import ThirdSection from "@/sections/third-section";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768);
  }, []);
  if (isSmallScreen) {
    return <></>;
  }

  if (isSmallScreen) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh", padding: 2, textAlign: "center" }}
      >
        <Typography variant="h5">
          This website is optimized for larger screens. For the best experience,
          please view it on a larger device. We’re working on making it
          accessible on all devices very soon! 🥳
        </Typography>
      </Stack>
    );
  }
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
