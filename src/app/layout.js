import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard Alert Panel",
  description: "Dashboard Alert Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <SideMenu />
        <div className="flex flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
