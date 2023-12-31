import Footer from "@/components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Biyahe ni Zeph",
  description: "Zeph's personal blog and practicing environment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
