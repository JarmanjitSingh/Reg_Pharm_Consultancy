"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const SixthSection = () => {
  const theme = useTheme();
  const handleGetStarted = () => {
    window.location.href = "mailto:info@regpharmconsultancy.com";
  };
  return (
    <Box bgcolor={theme.palette.primary.dark}>
      <Container maxWidth="xl" sx={{ padding: "6rem 0" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p="0 2rem"
        >
          <Stack direction="column" width="70%">
            <Typography variant="h1" color="white" mb={2}>
              Take the Next Step with A Regpharm Consultancy
            </Typography>
            <Typography color="white">
              Ready to experience seamless regulatory solutions tailored to your
              needs?
            </Typography>
            <Typography color="white">
              Partner with us to take your pharmaceutical business to the next
              level.
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={{
              background: "white",
              height: "fit-content",
              color: theme.palette.primary.dark,
              "&:hover": {
                background: theme.palette.primary.dark,
                color: "white",
                border: "1px solid white",
              },
            }}
            onClick={handleGetStarted}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SixthSection;
