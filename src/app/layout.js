import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/common/header/header";
import Footer from "@/common/Footer/footer";
import { NewHeader } from "@/components/newheader/newheader";


export default function RootLayout({ children }) {

  console.log(children, "children>>>>>>>>>>>>>....")
  return (
    <html lang="en">
      <body
      >
        {/* <Header /> */}
        <NewHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
