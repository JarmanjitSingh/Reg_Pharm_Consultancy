"use client";
import {
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { FaBacteria, FaClipboardList, FaStethoscope } from "react-icons/fa6";
import { GiMagnifyingGlass, GiMedicines } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { HiBeaker } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

const services = [
  {
    icon: <GiMedicines size={80} />,
    title: "Dossier Compilation & Legal Advisory",
    description: `Exposure of filling Dossier more than 75 plus Countries including 
    Regulated /Semi regulated /ROW markets Dossier compilation as per regulatory /Country 
    Guidelines Admin documents legalization /Apostille services Legal Support on Confidential 
    Agreements for API & Finished Products Expertise in Query Handling for Regulated /Semi 
    regulated /ROW markets Licensing & Admin Support Guidance Drug Master File (Open & 
    Close part with GMP )`,
  },
  {
    icon: <HiBeaker size={80} />,
    title: "Quality Control",
    description: `Expertise in Analytical Support in Quality Control documentation 
    (Stability Data : Long Term , Accelerated (Protocol / Report) In-use stability Protocol /Report) Analytical 
    Method Validation (HPLC/ UV Spectra/Titration and other Analytical methods ) Comparative Dissolution Profile`,
  },
  {
    icon: <FaBacteria size={80} />,
    title: "Microbiology",
    description: `Expertise in Microbial Validation:`,
    list: [
      "BET Validation",
      "Sterility Validation",
      "Media fill Validation",
      "Microbial Assay Validation",
      "Preservative Method Validation",
    ],
  },
  {
    icon: <FaCheckCircle size={80} />,
    title: "Quality Assurance",
    description: `Expertise in Quality Assurance documentation`,
    list: [
      "Standard Operating Procedures",
      "WHO Filling",
      "Training programs",
      "Site Master File",
      "Process Validation Protocol / Report",
      "Master Formula Record (MFR)",
      "Batch Manufacturing Record (BMR)",
      "COPP Application",
      "Change Control / Deviation / CAPA / Product Recall / Market Complaints / Risk Management / Quality Manuals",
      "Product License Application",
    ],
  },
  {
    icon: <IoBookSharp size={80} />,
    title: "Formulation & Development with tech Transfer",
    description: `New Product Development data generation including Product Development Report (PDR) with full documentation support as per PICs/EU/ANVISA & WHO Standards Method Development Report (MDR) - Drug Excipient report & protocol, Comprehensive support for force degradation protocols and reports. Tech transfer Services`,
  },
  {
    icon: <FaStethoscope size={80} />,
    title: "Clinical /Non – Clinical/ Pharmacovigilance Services",
    description: ``,
    list: [
      "BA/BE studies",
      "Biowaiver Reports",
      "Toxicological Studies",
      "Pharmacovigilance Study",
      "Product Safety Update Reports",
      "Risk Minimization Plan",
    ],
  },
  {
    icon: <FaClipboardList size={80} />,
    title: "Tenders",
    description: ``,
    list: [
      "Export Tender Filling",
      "Govt Tender Filling: Haffkine, Rmscl, Upmscl , Gmsd, Janaushadhi tenders",
    ],
  },
  {
    icon: <GiMagnifyingGlass size={80} />,
    title: "Audit Support",
    description: ``,
    list: [
      "Plant upgradation & Assessment as per EU",
      "ANVISA",
      "MHRA & WHO-GMP Standard",
    ],
  },
];

const ThirdSection = () => {
  const theme = useTheme();
  return (
    <Container id="services" maxWidth="xl" sx={{ padding: {xs: "4rem 2rem", sm: "4rem 0"} }}>
      <Stack direction="column" alignContent="center" alignItems="center">
        <Typography variant="h1">
          Our Services
          {/* <FaGlobe size={30} color={theme.palette.primary.dark} /> */}
        </Typography>
        <Typography>
          Services including dossier compilation, preparation of QC documents,
          process validation reports, method development, BA-BE studies, and
          clinical services.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 12 }}
        mt={6}
      >
        {services.map((service, index) => (
          <Grid
            key={index}
            size={{ xs: 12, md: 4 }}
            border={"1px solid"}
            borderColor={theme.palette.primary.dark}
            borderRadius={"10px"}
          >
            <Stack
              direction="column"
              alignItems="start"
              justifyContent="center"
              padding="3rem 2rem"
              gap={4}
            >
              <div style={{ color: theme.palette.primary.dark }}>
                {service.icon}
              </div>
              <Typography variant="h3">{service.title}</Typography>
              <Typography variant="h6" color="black">
                {service.description}
                {service.list && (
                  <ul>
                    {service.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </Typography>
            </Stack>
          </Grid>
        ))}

        <Grid
          size={{ xs: 12, md: 4 }}
          border={"1px solid"}
          borderColor={theme.palette.primary.dark}
          borderRadius={"10px"}
        >
          <Stack
            direction="column"
            alignItems="start"
            justifyContent="center"
            padding="3rem 2rem"
            gap={4}
          >
            <GrServices size={80} color={theme.palette.primary.dark} />
            <Typography variant="h3">Other Services</Typography>
            <Typography variant="h6" color="black">
              <ul>
                <li>
                  Training Programmes and Certification Courses
                  <ul>
                    <li>Basic Introduction to Regulatory Affairs</li>
                    <li>Advanced Basics of Regulatory Affairs</li>
                  </ul>
                </li>
                <li>
                  We customise our services as per our client’s requirements.
                </li>
              </ul>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThirdSection;
