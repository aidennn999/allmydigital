// app/layout.tsx
import type {Metadata} from "next";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
});

const poppins = Poppins({
 subsets: ["latin"],
 weight: ["400", "500", "600", "700", "800"],
 variable: "--font-poppins",
});

export const metadata: Metadata = {
 title: "DigitalInvite - Jasa Pembuatan Undangan Digital & Website Profesional",
 description:
  "Menyediakan jasa pembuatan undangan digital, website portofolio, dan layanan digital kreatif lainnya dengan desain modern dan elegan.",
 keywords:
  "undangan digital, website portofolio, jasa pembuatan website, desain web",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
 return (
  <html
   lang="id"
   className={`${inter.variable} ${poppins.variable}`}>
   <body className="font-sans">
    <div className="min-h-screen flex flex-col">
     <Header />
     <main className="flex-grow">{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
