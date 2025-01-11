import type { Metadata } from "next";
import "./globals.css";
import SidebarComponent from "@/components/sidebarComponent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} dark min-h-screen `}>
        <SidebarComponent>
          <div className="p-10 w-full h-screen bg-[#0D0B32]">{children}</div>
        </SidebarComponent>
      </body>
    </html>
  );
}
