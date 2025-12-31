import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navber from "@/components/layouts/Navber";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const fontBangla = localFont({
  src: "../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  default: "Hero Kidz",
  templete: "%s | Hero Kidz",
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
        <main className="w-11/12 mx-auto min-h-[calc(100vh-302px)] py-10">
          {children}
        </main>
        <footer className="bg-base-200 text-base-content">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
