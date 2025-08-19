import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pinddaan Services - Sacred Rituals in Gaya Ji",
  description: "Authentic spiritual services and sacred rituals in the holy city of Gaya Ji. Experience traditional Pinddaan ceremonies with complete devotion.",
  keywords: "pinddaan, gaya, spiritual services, hindu rituals, sacred ceremonies, religious services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-inter`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
