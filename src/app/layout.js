import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/layout/navbar/navbar";
import Footer from "@/shared/layout/footer/footer";

const ttl_web = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
export const metadata = {
  title: "Happy shopping",
  description: "Happy shopping E-Commerce",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ttl_web.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
