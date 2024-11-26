import {
  Box,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FaGlobeAmericas, FaCheck } from "react-icons/fa";
import {
  FaChartLine,
  FaGears,
  FaShield,
  FaStar,
  FaUsers,
} from "react-icons/fa6";

const chooseUs = {
  sectionTitle: "Why Choose Us",
  sellingPoints: [
    {
      title: "10+ Years of Expertise",
      description:
        "Our extensive experience in the pharmaceutical market enables us to deliver top-notch solutions tailored to your needs.",
      icon: (
        <Typography variant="h1" color="white" fontSize="2rem">
          10+
        </Typography>
      ),
      bg: "#F36A8D",
    },
    {
      title: "Global Reach",
      description:
        "We’ve successfully submitted dossiers across SEA, LATAM, Middle East, CIS, Africa, and Europe, ensuring compliance with diverse regulatory standards.",
      icon: <FaGlobeAmericas size={32} />,
      bg: "#20CA66",
    },
    {
      title: "No-Error Dossiers",
      description:
        "Our meticulous attention to detail ensures that all dossiers are error-free, saving time and preventing delays.",
      icon: <FaCheck size={32} />,
      bg: "#FA9161",
    },
    {
      title: "Compliance with International Standards",
      description:
        "We work with EU-GMP, ANVISA, WHO-GMP, and more to ensure global regulatory compliance.",
      icon: <FaShield size={32} />,
      bg: "#FFDD0F",
    },
    {
      title: "Customizable Services",
      description:
        "We adapt our services to meet your specific requirements, providing flexibility and precision.",
      icon: <FaGears size={32} />,
      bg: "#F36A8D",
    },
    {
      title: "Skilled Team",
      description:
        "Our team is equipped with the knowledge and tools needed to navigate complex regulatory landscapes.",
      icon: <FaUsers size={32} />,
      bg: "#20CA66",
    },
    {
      title: "Systematic Methodology",
      description:
        "We follow a proven, structured approach to achieve the best outcomes for our clients.",
      icon: <FaChartLine size={32} />,
      bg: "#FA9161",
    },
    {
      title: "Commitment to Quality",
      description:
        "Quality is our top priority, ensuring every deliverable exceeds client expectations.",
      icon: <FaStar size={32} />,
      bg: "#FFDD0F",
    },
  ],
};

const FifthSection = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "4rem 0" }}>
      <Stack direction="column" alignContent="center" alignItems="center">
        <Typography variant="h1">
          Why Choose A Regpharm Consultancy?
          {/* <FaGlobe size={30} color={theme.palette.primary.dark} /> */}
        </Typography>
        <Typography width="70%" align="center">
          At A Regpharm Consultancy, we pride ourselves on being a trusted
          partner for regulatory compliance in the pharmaceutical industry.
          Here’s why we’re the preferred choice for our clients around the
          world.
        </Typography>
      </Stack>

      <Grid container width="100%" spacing={2} mt={4}>
        {chooseUs.sellingPoints.map((item, index) => {
          return (
            <Grid
              size={{ xs: 2, md: 4 }}
              //   border={"1px solid red"}
              display="flex"
              spacing={4}
              gap={4}
              p={2}
              key={index}
            >
              <Box
                height="5rem"
                width="5rem"
                borderRadius="50%"
                bgcolor={item.bg}
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex="none"
              >
                {item.icon}
              </Box>

              <Stack gap={2}>
                <Typography variant="h1" fontSize="2rem" lineHeight={1}>
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FifthSection;
