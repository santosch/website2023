import '../styles/globals.scss'
import Footer from "@santosch/components/Footer/Footer";
import type {ReactNode} from "react";
import {Metadata} from "next";
import COLORS from "@santosch/styles/colors.module.scss";

const url = 'https://sebastian-antosch.de';
const title = 'Sebastian Antosch';
const description = 'Sebastian Antosch ist Softwareentwickler (Web, Frontend/Full-Stack) und UI-Enthusiast aus Augsburg.';
const banner = '/assets/images/socialbanner.jpg';

export const metadata: Metadata = {
    title,
    description,
    viewport: 'width=device-width, initial-scale=1',
    authors: {
        name: 'Sebastian Antosch',
        url,
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: {
            url: url + banner,
            width: 1200,
            height: 630,
            type: 'image/jpeg',
        }
    },
    openGraph: {
        title,
        url,
        description,
        images: {
            url: url + banner,
            width: 1200,
            height: 630,
            type: 'image/jpeg',
        },
        siteName: 'sebastian-antosch.de',
        type: 'profile',
        firstName: 'Sebastian',
        lastName: 'Antosch',
        gender: 'male',
    },
    themeColor: COLORS.background,
    other: {
        'msapplication-TileColor': COLORS.background,
        'msapplication-config': '/assets/icons/browserconfig.xml',
        canonical: url,
    }
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="de">
        <head>
            <link rel="apple-touch-icon"
                  sizes="180x180"
                  href="/assets/icons/apple-touch-icon.png"
            />
            <link rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/assets/icons/favicon-32x32.png"
            />
            <link rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/assets/icons/favicon-16x16.png"
            />
            <link rel="manifest"
                  href="/assets/icons/site.webmanifest"
            />
            <link rel="mask-icon"
                  href="/assets/icons/safari-pinned-tab.svg"
                  color={COLORS.highlight}
            />
            <link rel="shortcut icon"
                  href="/assets/icons/favicon.ico"
            />
        </head>
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
