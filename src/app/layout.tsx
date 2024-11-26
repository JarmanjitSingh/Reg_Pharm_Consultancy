import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "A Regpharm Consultancy | Regulatory Solutions Experts",
  description:
    "A Regpharm Consultancy: 10+ years of expertise in regulatory consultancy for the pharmaceutical industry. Services include dossier preparation, QC documentation, BA-BE studies, and more.",
  keywords: [
    "Regpharm Consultancy",
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
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
