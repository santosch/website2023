import './globals.scss'
import Hero from "@santosch/components/Hero/Hero";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head />
      <body>
        <Hero/>
        <main>
            {children}
        </main>
      </body>
    </html>
  )
}
