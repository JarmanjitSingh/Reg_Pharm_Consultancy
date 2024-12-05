import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "A Regpharm Consultancy | Regulatory Solutions Experts",
  description:
    "A Regpharm Consultancy: 10+ years of expertise in regulatory consultancy for the pharmaceutical industry. Services include dossier preparation, QC documentation, BA-BE studies, and more.",
  keywords: [
    "Regpharm Consultancy",
    "Regpharm",
    "Reg pharm",
    "Reg pharm consultancy",
    "Regulatory Solutions",
    "Pharmaceutical Consultancy",
    "Dossier Preparation",
    "QC Documentation",
    "BA-BE Studies",
    "Pharma Regulatory Experts",
  ],
  authors: [
    {
      name: "Regpharm Consultancy",
      url: "https://www.regpharmconsultancy.com",
    },
  ],
  creator: "Regpharm Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="r8hAuwM6H5JDMPSlA8ADr5sTFgPvLt4YRQrfQR01L0Q"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SpeedInsights />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
