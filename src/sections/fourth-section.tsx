"use client";
import {
  Box,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { TbBulbFilled } from "react-icons/tb";
import banner3 from "/public/banner3.jpg";
import banner4 from "/public/banner4.jpg";
import banner5 from "/public/banner5.jpg";

const FourthSection = () => {
  return (
    <Box bgcolor="#F5F5F5">
      <Container maxWidth="xl" sx={{ padding: "4rem 0" }}>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            // border={"1px solid orange"}
            p={{xs: "0 2rem", sm: "0 4rem"}}
          >
            <Stack direction="column" alignContent="center" alignItems="center">
              <Typography variant="h1" mb={2}>
                Custom Solutions for Your Unique Needs
                <TbBulbFilled size={40} color="orange" />
              </Typography>
              <Typography>
                At A Regpharm Consultancy, we understand that each client has
                unique challenges and objectives. That’s why we offer
                custom-tailored solutions designed to meet your specific
                regulatory needs. Our approach combines industry expertise,
                personalized consultation, and a deep understanding of your
                business to deliver the best results
              </Typography>

              <ul>
                <li>
                  <Typography variant="h4" color="black" mb={2} mt={2}>
                    Personalized Consultation
                  </Typography>
                  <Typography variant="h6" color="black">
                    We work closely with you to understand the intricacies of
                    your business and regulatory requirements.
                  </Typography>
                </li>

                <li>
                  <Typography variant="h4" color="black" mb={2} mt={2}>
                    Tailored Reporting and Documentation
                  </Typography>
                  <Typography variant="h6" color="black">
                    Whether it’s dossiers, stability data, or validation
                    reports, we customize documents to meet the specific needs
                    of your markets.
                  </Typography>
                </li>

                <li>
                  <Typography variant="h4" color="black" mb={2} mt={2}>
                    Compliance Assistance
                  </Typography>
                  <Typography variant="h6" color="black">
                    Our team helps you navigate local regulations with
                    precision, ensuring seamless compliance with
                    country-specific guidelines.
                  </Typography>
                </li>

                <li>
                  <Typography variant="h4" color="black" mb={2} mt={2}>
                    Advanced Solutions for Complex Challenges
                  </Typography>
                  <Typography variant="h6" color="black">
                    From market entry strategies to overcoming regulatory
                    hurdles, we provide strategic advice and hands-on support.
                  </Typography>
                </li>
              </ul>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 6, md: 6 }}
            // border={"1px solid blue"}
            display={{ xs: "none", sm: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Stack
              direction={"row"}
              // border="4px solid red"
              width="100%"
              height="100%"
            >
              <Stack
                direction={"column"}
                // border="4px solid pink"
                width="50%"
                justifyContent={"space-between"}
                display={{ md: "none", lg: "flex" }}
              >
                <Box
                  border={"4px solid pink"}
                  height={"22rem"}
                  width={"90%"}
                  borderRadius="10px"
                  overflow="hidden"
                  position={"relative"}
                >
                  <Image
                    src={banner5}
                    alt="banner2"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>

                <Box
                  // border={"4px solid pink"}
                  height={"22rem"}
                  width={"90%"}
                  borderRadius="10px"
                  overflow="hidden"
                  position={"relative"}
                >
                  <Image
                    src={banner3}
                    alt="banner2"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Stack>

              <Box
                // border={"4px solid pink"}
                height={"100%"}
                width={{ md: "100%", lg: "50%" }}
                borderRadius="10px"
                overflow="hidden"
                position={"relative"}
              >
                <Image
                  src={banner4}
                  alt="banner2"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FourthSection;
