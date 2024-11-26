"use client";
import { Box, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactForm from "../contact/contact";
import ModalComp from "../contact/modal";
import logo from "/public/regLogo.jpeg";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    // setIsModalOpen(true);
    window.location.href = "mailto:info@regpharmconsultancy.com";
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isSmallScreen = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 50
      ) {
        // Scrolling down and past a threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  if (isSmallScreen) {
    return <></>;
  }
  return (
    <Box
      sx={{
        position: "fixed",
        top: isVisible ? 0 : "-100px", // Hide navbar by moving it upward
        left: 0,
        right: 0,
        transition: "top 0.3s ease", // Smooth transition
        zIndex: 1000,
        backgroundColor: "#fff",
        boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
      }}
      id="navbar"
    >
      <Container maxWidth={"xl"}>
        <Stack
          p={"5px 0"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={6}
          // border={"2px solid red"}
        >
          <Link href="/">
            <Image src={logo} alt="Reg Pharm Logo" height={90} width={250} />
          </Link>

          <Stack direction={"row"} gap={4}>
            <Link href={"/"}>Home</Link>
            <Link href={"#experiences"}>Experience</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack direction={"row"} gap={1}>
            <Button variant="contained" onClick={handleOpen}>
              Get in Touch
            </Button>
          </Stack>
        </Stack>
      </Container>

      <ModalComp open={isModalOpen} onOpen={handleOpen} onClose={handleClose}>
        <ContactForm submitFunction={handleClose} />
      </ModalComp>
    </Box>
  );
};

export default Navbar;
