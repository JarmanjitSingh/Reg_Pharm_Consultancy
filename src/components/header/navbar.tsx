"use client";
import { Box, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactForm from "../contact/contact";
import ModalComp from "../contact/modal";
import logo from "/public/regLogo.jpeg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    // setIsModalOpen(true);
    // window.location.href = "mailto:info@regpharmconsultancy.com";
    router.push("/about");
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

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
        >
          <Link href="/">
            <Image src={logo} alt="Reg Pharm Logo" height={90} width={200} />
          </Link>

          <Stack
            direction={"row"}
            gap={4}
            display={{ xs: "none", sm: "none", md: "flex" }}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/#experiences"}>Experience</Link>
            <Link href={"/#services"}>Services</Link>
            <Link href={"mailto:info@regpharmconsultancy.com"}>Contact Us</Link>
          </Stack>

          <Button variant="contained" onClick={handleOpen}>
            About Us
          </Button>
        </Stack>
      </Container>

      <ModalComp open={isModalOpen} onOpen={handleOpen} onClose={handleClose}>
        <ContactForm submitFunction={handleClose} />
      </ModalComp>
    </Box>
  );
};

export default Navbar;
