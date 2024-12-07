"use client";
import {
  Box,
  Container,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import * as Flags from "country-flag-icons/react/1x1";
import { Fragment, ReactNode } from "react";
import { FaGlobe } from "react-icons/fa6";

const regions = {
  SEA: {
    region: "Southeast Asia",
    countries: [
      { name: "Myanmar", code: Flags.MM },
      { name: "Cambodia", code: Flags.KH },
      { name: "Laos", code: Flags.LA },
      { name: "Indonesia", code: Flags.ID },
      { name: "Vietnam", code: Flags.VN },
      { name: "Sri Lanka", code: Flags.LK },
      { name: "Malaysia", code: Flags.MY },
    ],
  },
  LATAM: {
    region: "Latin America",
    countries: [
      { name: "Ecuador", code: Flags.EC },
      { name: "Chile", code: Flags.CL },
      { name: "Bolivia", code: Flags.BO },
      { name: "Venezuela", code: Flags.VE },
      { name: "Costa Rica", code: Flags.CR },
      { name: "Guatemala", code: Flags.GT },
      { name: "Mexico", code: Flags.MX },
      //   { name: "Paraguay", code: Flags.PY },
      //   { name: "Dominican Republic", code: Flags.DO },
      //   { name: "Peru", code: Flags.PE },
      //   { name: "Nicaragua", code: Flags.NI },
      //   { name: "El Salvador", code: Flags.SV },
      //   { name: "Panama", code: Flags.PA },
    ],
  },
  MiddleEast: {
    region: "Middle East",
    countries: [
      { name: "UAE", code: Flags.AE },
      { name: "Oman", code: Flags.OM },
      { name: "Iraq", code: Flags.IQ },
      { name: "Afghanistan", code: Flags.AF },
      { name: "Iran", code: Flags.IR },
    ],
  },
  CIS: {
    region: "CIS",
    countries: [
      { name: "Georgia", code: Flags.GE },
      { name: "Uzbekistan", code: Flags.UZ },
      { name: "Turkmenistan", code: Flags.TM },
    ],
  },
  Africa: {
    region: "Africa",
    countries: [
      { name: "South Africa", code: Flags.ZA },
      { name: "Kenya", code: Flags.KE },
      { name: "Tanzania", code: Flags.TZ },
      { name: "Uganda", code: Flags.UG },
      { name: "Nigeria", code: Flags.NG },
      { name: "Ghana", code: Flags.GH },
      { name: "Cote d'Ivoire", code: Flags.CI },
    ],
  },
  Europe: {
    region: "Europe",
    countries: [
      { name: "Algeria", code: Flags.DZ },
      { name: "Morocco", code: Flags.MA },
      { name: "Egypt", code: Flags.EG },
      { name: "France", code: Flags.FR },
      { name: "Spain", code: Flags.ES },
    ],
  },
};

const SecondSection = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="#F5F5F5">
      <Container
        maxWidth="xl"
        sx={{ padding: { xs: "4rem 2rem", sm: "4rem 0" } }}
      >
        <Stack direction="column" alignContent="center" alignItems="center">
          <Typography variant="h1" align="center">
            Global Experience and Expertise{" "}
            <FaGlobe size={30} color={theme.palette.primary.dark} />
          </Typography>
          <Typography align="center" mt={{ xs: 2, sm: 0 }}>
            We have submitted dossiers to various countries across regions like
            SEA, LATAM, Middle East, CIS, Africa, and Europe.
          </Typography>
        </Stack>

        <Grid container mt={6} spacing={{ xs: 6, sm: 4 }}>
          <Grid size={{ xs: 12, sm: 3, md: 2 }}>
            <Typography
              variant="h3"
              ml={4}
              mb={2}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Latam
            </Typography>
            <List
              sx={{
                width: "fit-content",
                margin: "auto",
              }}
            >
              {regions.LATAM.countries.map((item) => (
                <Fragment key={item.name}>
                  <ListItemComp country={item.name} FlagIcon={<item.code />} />
                </Fragment>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, sm: 3, md: 2 }}>
            <Typography
              variant="h3"
              ml={4}
              mb={2}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Sea
            </Typography>
            <List
              sx={{
                width: "fit-content",
                margin: "auto",
              }}
            >
              {regions.SEA.countries.map((item) => (
                <Fragment key={item.name}>
                  <ListItemComp country={item.name} FlagIcon={<item.code />} />
                </Fragment>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, sm: 3, md: 2 }}>
            <Typography
              variant="h3"
              ml={4}
              mb={2}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Africa
            </Typography>

            <List
              sx={{
                width: "fit-content",
                margin: "auto",
              }}
            >
              {regions.Africa.countries.map((item) => (
                <Fragment key={item.name}>
                  <ListItemComp country={item.name} FlagIcon={<item.code />} />
                </Fragment>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, sm: 3, md: 2 }}>
            <Typography
              variant="h3"
              ml={4}
              mb={2}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Middle East
            </Typography>

            <List
              sx={{
                width: "fit-content",
                margin: "auto",
              }}
            >
              {regions.MiddleEast.countries.map((item) => (
                <Fragment key={item.name}>
                  <ListItemComp country={item.name} FlagIcon={<item.code />} />
                </Fragment>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, sm: 3, md: 2 }}>
            <Typography
              variant="h3"
              ml={4}
              mb={2}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Europe
            </Typography>

            <List
              sx={{
                width: "fit-content",
                margin: "auto",
              }}
            >
              {regions.Europe.countries.map((item) => (
                <Fragment key={item.name}>
                  <ListItemComp country={item.name} FlagIcon={<item.code />} />
                </Fragment>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, sm: 3, md: 2 }}>
            <Typography
              variant="h3"
              ml={4}
              mb={2}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              CIS
            </Typography>

            <List
              sx={{
                width: "fit-content",
                margin: "auto",
              }}
            >
              {regions.CIS.countries.map((item) => (
                <Fragment key={item.name}>
                  <ListItemComp country={item.name} FlagIcon={<item.code />} />
                </Fragment>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SecondSection;

const ListItemComp = ({
  country,
  FlagIcon,
}: {
  country: string;
  FlagIcon: ReactNode;
}) => {
  return (
    <ListItem>
      <Box
        height={"2rem"}
        width={"2rem"}
        borderRadius={"50%"}
        overflow="hidden"
        mr={2}
      >
        {FlagIcon}
      </Box>
      <ListItemText primary={country} />
    </ListItem>
  );
};
