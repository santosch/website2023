import '../styles/globals.scss'
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
        <main>
            <>
                {children}
            </>
        </main>
        <Footer />
      </body>
    </html>
  )
}
