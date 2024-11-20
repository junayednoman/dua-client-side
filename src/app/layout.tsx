import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "./layout/Navbar";
import { Inter } from "next/font/google";
import LeftSidebar from "./layout/LeftSidebar";
import Container from "@/components/Container";
import RightSidebar from "./layout/RightSidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.className}`}>
        <Provider>
          <Container>
            <div className="flex gap-6 py-6">
              <LeftSidebar />
              <div className="flex-grow">
                <Navbar />
                <div className="flex gap-6">
                  <div className="flex-grow ">{children}</div>
                  <RightSidebar />
                </div>
              </div>
            </div>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
