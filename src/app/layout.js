import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/common/header/header";
import Footer from "@/common/Footer/footer";


export default function RootLayout({ children }) {

  console.log(children, "children>>>>>>>>>>>>>....")
  return (
    <html lang="en">
      <body
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
