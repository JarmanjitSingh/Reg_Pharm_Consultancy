"use client";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import banner2 from "/public/banner2.jpg";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

const FirstSection = () => {
  const theme = useTheme();
  const handleGetStarted = () => {
    window.location.href = "mailto:info@regpharmconsultancy.com";
  };
  return (
    <Container
      id="experiences"
      maxWidth="xl"
      sx={{ padding: "2rem 0", mt: "6rem" }}
    >
      <Grid
        container
        spacing={2}
        //   border={"4px solid violet "}
      >
        <Grid
          size={{ xs: 6, md: 6 }}
          //   border={"1px solid orange"}
          p={"0 4rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="column" gap={4}>
            <Typography variant="h1">
              Welcome to A RegPharm Consultancy
            </Typography>

            <Typography>
              We are a regulatory consultancy based in Chandigarh with over 10
              years of experience in the pharmaceutical market. Our expertise
              spans EU-GMP, PICS, ANVISA, and COFEPRIS manufacturing facilities.
            </Typography>

            <Stack
              // border={"1px solid red"}
              direction="row"
              gap={4}
            >
              <Button variant="contained" onClick={handleGetStarted}>
                Get Started Now
              </Button>
              <Stack direction={"column"}>
                <Typography>Call us +91-9915913112</Typography>
                <Typography variant="h5">
                  For any question or concern
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 6, md: 6 }}
          //   border={"1px solid blue"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box
            position="absolute"
            // border={"1px solid red"}
            zIndex={1}
            height={"10rem"}
            width={"20rem"}
            p={2}
            borderRadius={"10px"}
            bgcolor={theme.palette.primary.dark}
            color={"white"}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            gap={2}
            bottom={0}
            left={"-6rem"}
          >
            <Box position={"absolute"} top={"-1rem"} left={0}>
              <ImQuotesLeft size={35} color="orange" />
            </Box>
            <Typography color="white" variant="h6">
              Navigating Regulation, Ensuring Excellent Path
            </Typography>

            <Typography color="Orange" variant="h6" align="right">
              Yogita Upadhyay
            </Typography>
          </Box>
          <Box
            // border={"4px solid pink"}
            height={"35rem"}
            width={"90%"}
            borderRadius="10px"
            overflow="hidden"
            position={"relative"}
          >
            <Image
              src={banner2}
              alt="banner2"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FirstSection;
