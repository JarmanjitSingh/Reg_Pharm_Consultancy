import {
  Box,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import yogita from "/public/yogitaa2.jpeg";

const AboutPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "50vh", mt: "10rem", pt: "2rem", pb: "10rem" }}
    >
      <Stack direction={{ xs: "column", sm: "row" }} height="100%">
        <Stack
          direction="column"
          //   border="1px solid blue"
          width={{ xs: "100%", sm: "60%" }}
          p={"2rem 2rem"}
        >
          <Typography variant="h1" fontSize="2rem" color="orange">
            How it Started
          </Typography>
          <Typography variant="h1" mb={4}>
            Our Vision Empowering Excellence in Pharma
          </Typography>

          <Typography>
            <strong>Ms. Yogyataa </strong>
            is the founder of <strong>RegPharm Consultancy</strong> having More
            than 11 years’ Experience of Regulatory Affairs. She have been
            worked in various Pharmaceutical Companies as a Regulatory Head ,
            She had started RegPharm Consultancy to educate the Students who are
            willing to learn the basics of Regulatory Affairs with Advance level
            Theories and working styles of Regulatory . RegPharm Consultancy
            have experienced R&D, F&D & Regulatory teams who are capable of
            Query Solving, Dossier Compilation with better Registration
            mark-up’s upto ROW & Stringent Markets such as ANVISA/EU/PICS level
          </Typography>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          //   border="1px solid blue"
          width={{ xs: "100%", sm: "40%" }}
        >
          <Stack
            // border="4px solid violet"
            width="70%"
            height="30rem"
            borderRadius="10px"
            margin="auto"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            position="relative"
          >
            <Box
              height={"100%"}
              width={"100%"}
              //   borderRadius="10px"
              overflow="hidden"
              position={"relative"}
              margin="auto"
              //   border="1px solid red"
            >
              <Image
                src={yogita}
                alt="banner2"
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
            </Box>

            <Box
              position="absolute"
              bottom={0}
              //   bgcolor="black"
              width="100%"
              p="1rem 2rem"
              sx={{
                // background: "rgb(2,0,36)",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,4,70,1) 14%, rgba(5,19,84,1) 20%, rgba(0,212,255,1) 100%)",
              }}
            >
              {/* <Typography variant="h4" color="white">
                CEO
              </Typography> */}
              <Typography
                variant="h1"
                fontSize="1.5rem"
                color="white"
                lineHeight={1}
              >
                Yogita Upadhyay
              </Typography>
              <Typography color="white" variant="subtitle1">
                Regulatory Affair Consultant
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Grid container mt={8} spacing={{xs: 4, sm: 12}}>
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="2rem"
          borderRadius={"10px"}
          gap={2}
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <Typography variant="h1" fontSize="2rem" lineHeight={1}>
            3.5 +
          </Typography>
          <Typography>Years of Experience</Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="2rem"
          borderRadius={"10px"}
          gap={2}
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <Typography variant="h1" fontSize="2rem" lineHeight={1}>
            23
          </Typography>
          <Typography>Project Challenge</Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="2rem"
          borderRadius={"10px"}
          gap={2}
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <Typography variant="h1" fontSize="2rem" lineHeight={1}>
            830 +
          </Typography>
          <Typography>Positive Reviews</Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="2rem"
          borderRadius={"10px"}
          gap={2}
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <Typography variant="h1" fontSize="2rem" lineHeight={1}>
            150 +
          </Typography>
          <Typography>Trusted Students</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
