import { Roboto_Slab } from '@next/font/google'
import './globals.scss'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
