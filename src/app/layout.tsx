import '../styles/globals.scss'
import Hero from "@santosch/components/Hero/Hero";
import Footer from "@santosch/components/Footer/Footer";
import type {ReactNode} from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="de">
      <head />
      <body>
        <Hero/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
