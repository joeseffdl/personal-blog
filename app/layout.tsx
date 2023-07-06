import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Zeph's Journey 🦁",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
