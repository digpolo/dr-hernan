import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const poppins = Poppins({
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Dr Hernan Jojoa",
  description: "Dr hernan Jojoa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <NavBar />
      {children}
      <Footer/>
      </body>
    </html>
  )
}
