import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Faculty of Technology DU | Training & Placement Cell",
  description:
    "High-conversion recruiter landing experience for the inaugural batch at Faculty of Technology, University of Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${plex.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
