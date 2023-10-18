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
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
        <script
          async // Agrega la propiedad async para cargar el script de forma asíncrona
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
        ></script>
      </body>
    </html>
  );
}
