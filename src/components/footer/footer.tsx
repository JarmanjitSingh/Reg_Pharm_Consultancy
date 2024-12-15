"use client";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import logo from "/public/regLogo.jpeg";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ boxShadow: "0 2px 2px 2px rgba(0,0,0,.2)" }}>
      <Container maxWidth={"xl"}>
        <Stack
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
        >
          <Stack
            width={{ xs: "100%", sm: "100%", md: "30%" }}
            p={"2rem"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            bgcolor={"white"}
          >
            <Image src={logo} alt="Reg Pharm Logo" height={120} width={290} />
            <Typography variant="body1" width={310} pl={4}>
              Our goal is to offer broad capabilities, competitive pricing,
              exceptional quality and outstanding service to each and every
              customer.
            </Typography>

            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              mt={2}
              color={theme.palette.primary.dark}
            >
              <Link
                href={
                  "https://www.linkedin.com/in/yogita-upadhyay-5638b6b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
                target="_blank"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/regpharm_consultancy/profilecard/?igsh=eXkxMjZweXhwam9t"
                target="_blank"
              >
                <AiFillInstagram size={30} />
              </Link>

              <Link href="#">
                <FaSquareXTwitter size={24} />
              </Link>
              <Link href="#">
                <ImFacebook2 size={22} />
              </Link>
              <Link href="#">
                <FaYoutube size={30} />
              </Link>
            </Stack>
          </Stack>
          <Stack
            width={{ xs: "100%", sm: "100%", md: "70%" }}
            p={"2rem"}
            alignItems={{ xs: "top", sm: "top", md: "center" }}
            justifyContent={"center"}
            gap={2}
            direction={{ xs: "column", sm: "row" }}
            // border="1px solid red"
          >
            <Stack
              width={{ xs: "100%", sm: "30%" }}
              height={"100%"}
              gap={"2rem"}
            >
              <Typography variant="h1" fontSize="2rem">
                Quick Links
              </Typography>

              <Stack direction={"column"} gap={2}>
                <Link href={"/"}>Home</Link>
                <Link href={"#experience"}>Experience</Link>
                <Link href={"#services"}>Services</Link>
                <Link href={"/about"}>About Us</Link>
                <Link href={"#"}>Contact Us</Link>
              </Stack>
            </Stack>
            <Stack
              width={{ xs: "100%", sm: "30%" }}
              height={"100%"}
              gap={"2rem"}
            >
              <Typography variant="h1" fontSize="2rem">
                Services
              </Typography>

              <Stack direction={"column"} gap={2}>
                <Link href={"#services"}>
                  Preparation of Process Validation Report (PVR)
                </Link>
                <Link href={"#services"}>Product Development Report (PDR)</Link>
                <Link href={"#services"}>Master Formula Record (MFR)</Link>
                <Link href={"#services"}>PSUR & RMP - Clinical Services</Link>
              </Stack>
            </Stack>
            <Stack
              width={{ xs: "100%", sm: "30%" }}
              height={"100%"}
              gap={"2rem"}
              alignItems={"start"}
            >
              <Typography variant="h1" fontSize="2rem">
                Contact Us
              </Typography>

              <Stack direction={"column"} gap={2}>
                <Stack direction={"row"} gap={1}>
                  <FaLocationDot size={30} />
                  <Typography>
                    # 166, Kumauda Ward-6, PITHORGARH-262501 (Uttarakhand)
                  </Typography>
                </Stack>

                <Stack direction={"row"} gap={1}>
                  <FaPhone />
                  <Typography>+91-9915913112</Typography>
                </Stack>

                <Stack direction={"row"} gap={1}>
                  <IoMail />
                  <Typography>info@regpharmconsultancy.com</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          p={"2rem 0"}
          direction={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "space-evenly" }}
          alignItems={{ xs: "center", sm: "unset" }}
          color={"gray"}
          gap={{ xs: 2, sm: 4 }}
          borderTop="2px solid #eeeeee"
        >
          <Typography>Terms of Use | Privacy Policy</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography align="center">
            © Copyright 2024 RegPharm. All Rights Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
