import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "./layout/Navbar";
import { Inter } from "next/font/google";
import LeftSidebar from "./layout/LeftSidebar";
import Container from "@/components/Container";
import RightSidebar from "./layout/RightSidebar";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Import your local font
const me_quran = localFont({
  src: "./fonts/me_quran Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-meQuran",
});

export const metadata: Metadata = {
  title: "Dua & Ruqyah",
  description: "Dua & Ruqyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} ${me_quran.variable}`}>
        <Provider>
          <Navbar />
          <Container>
            <div className="flex xl:gap-6 pb-6 xl:mt-0 mt-6">
              <div className="-mt-[75px]">
                <LeftSidebar />
              </div>
              <div className="flex-grow">
                <div className="flex gap-5">
                  <div className="flex-grow ">{children}</div>
                  <RightSidebar className="2xl:block hidden" />
                </div>
              </div>
            </div>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
