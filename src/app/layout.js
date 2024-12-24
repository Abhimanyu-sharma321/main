import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/common/header/header";
import Footer from "@/common/Footer/footer";
import { NewHeader } from "@/components/newheader/newheader";
import SideCart from "@/components/sidecart/SideCart";


export default function RootLayout({ children }) {

  console.log(children, "children>>>>>>>>>>>>>....")


  return (
    <html lang="en">
      <body
      >
        <Header />
        <SideCart />
        {children}
        <Footer />
      </body>
    </html>
  );
}
