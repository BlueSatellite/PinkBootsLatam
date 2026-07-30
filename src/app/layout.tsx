import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pink Boots Society Latin America",
    template: "%s | Pink Boots Latam",
  },
  description:
    "Apoyando a mujeres y personas no binarias en la industria de bebidas fermentadas y alcoholicas en Latinoamerica. Distintas culturas, una sola pasion: la cerveza.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Pink Boots Latam",
  },
  applicationName: "Pink Boots Latam",
  keywords: [
    "pink boots",
    "cerveza",
    "mujeres cerveceras",
    "latinoamerica",
    "beer",
    "brewing",
    "women in beer",
    "non binary",
    "becas cerveza",
  ],
  authors: [{ name: "Pink Boots Society Latin America" }],
  openGraph: {
    type: "website",
    locale: "es_LA",
    siteName: "Pink Boots Society Latin America",
    title: "Pink Boots Society Latin America",
    description:
      "Apoyando a mujeres y personas no binarias en la industria de bebidas fermentadas y alcoholicas en Latinoamerica.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pink Boots Society Latin America",
    description:
      "Distintas culturas, una sola pasion: la cerveza.",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#e6267e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pink Boots Latam" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pink Boots Society Latin America",
              alternateName: "Pink Boots Latam",
              description: "Apoyando a mujeres y personas no binarias en la industria de bebidas fermentadas y alcoholicas en Latinoamerica.",
              url: "https://pinkbootslatam.org",
              logo: "https://pinkbootslatam.org/sponsors/pink-boots-logo.png",
              sameAs: [
                "https://www.instagram.com/pinkbootslatam/",
                "https://www.facebook.com/PinkBootsPeru/",
              ],
              foundingLocation: { "@type": "Place", address: { addressCountry: "PA" } },
              knowsAbout: ["cerveza", "brewing", "mujeres cerveceras", "bebidas fermentadas", "educacion cervecera"],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
