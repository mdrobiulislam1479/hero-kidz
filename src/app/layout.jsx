import { Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/layouts/Navber";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Hero Kidz",
  description: "A toy selling e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <header className="bg-base-200 text-base-content">
          <Navber />
        </header>
        <main>{children}</main>
        <footer className="bg-base-200 text-base-content">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
