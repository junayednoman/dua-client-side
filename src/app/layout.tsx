import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "./layout/Navbar";
import { Inter } from "next/font/google";
import LeftSidebar from "./layout/LeftSidebar";
import Container from "@/components/Container";

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
              <div className="w-[100px]">
                <LeftSidebar />
              </div>
              <div className="flex-grow">
                <Navbar />
                <div className="flex gap-6">
                  <div className="flex-grow ">{children}</div>
                  <div className="w-[260px]">
                    <div className="w-[260px] h-[84vh] border p-3 border-black rounded-lg ">
                      settings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
