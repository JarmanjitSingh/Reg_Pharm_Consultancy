"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto, Lora, Poppins, Outfit } from "next/font/google";

// Extend MUI's ButtonPropsVariantOverrides to include custom variants
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    custom: true; // Add the 'custom' variant
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    anchor1: true; // Declare custom variant 'anchor1'
  }
}

// Roboto for general body text
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Lora for headings
const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Poppins for navigation items
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light", // You can switch this to 'dark' if you need a dark theme
    primary: {
      main: "#12237D", // Blue shade
      light: "#4956A3",
      dark: "#0E1A5A",
    },
    secondary: {
      main: "#FF4081",
      //   light: "#ff79b0",
      //   dark: "#c60055",
    },
    background: {
      default: "white", // Light background for the app
      paper: "#ffffff", // Background for surfaces like cards, drawers, etc.
    },
    text: {
      primary: "#333333", // Dark text for readability
      secondary: "#555555", // Lighter shade for secondary content
    },
  },
  typography: {
    // Body text (general)
    fontFamily: roboto.style.fontFamily,
    // Main headings (h1, h2, etc.)
    h1: {
      fontFamily: outfit.style.fontFamily,
      fontWeight: 600,
      fontSize: "50px",
      color: "#181c31",
      lineHeight: "62px",
    },
    h2: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h3: {
      fontFamily: outfit.style.fontFamily,
      fontWeight: 400,
      fontSize: "2rem",
      color: "#181c31",
      lineHeight: "2rem",
    },
    h4: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 400,
      fontSize: "1.5rem",
    },

    h5: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 400,
      fontSize: "1rem",
      color: "black",
    },

    h6: {
      fontFamily: lora.style.fontFamily,
      fontSize: "1rem",
      color: "white",
      fontStyle: "italic",
    },
    // Paragraphs
    body1: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1.1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "gray",
    },
    // Navigation items (e.g., links, navbars)
    button: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
      textTransform: "none",
    },

    // You can further customize other typographical elements (like body2, subtitle1, etc.)
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
        a: {
          textDecoration: "none", // Removing text decoration for all links
          color: "gray", // Ensure link color inherits from the parent
          fontFamily: poppins.style.fontFamily,
          fontWeight: 100,
          textTransform: "none",
          "&:hover": {
            textDecoration: "none", // Add underline only on hover if needed
            color: "#12237D",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.9rem 2rem",
          borderRadius: 28, // Apply rounded corners to all buttons
          textTransform: "none", // Remove uppercase text transformation
          fontWeight: 300,
          width: "fit-content",
        },
        outlined: ({ theme }) => ({
          borderColor: theme.palette.primary.main, // Use secondary color for outline
          color: theme.palette.primary.main, // Text color for outlined button
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }),
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main, // Primary color for contained button
          color: theme.palette.primary.contrastText, // Text color for contained button
          "&:hover": {
            backgroundColor: theme.palette.primary.dark, // Darker primary on hover
          },
        }),
        text: {
          color: "#1976d2", // Default text button  color (primary)
          "&:hover": {
            backgroundColor: "#e3f2fd", // Light blue background on hover
          },
        },
      },
      variants: [
        {
          props: { variant: "custom" }, // Custom variant
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main, // Custom green button
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark, // Darker green on hover
            },
          }),
        },
      ],
    },
  },
});

export default theme;
