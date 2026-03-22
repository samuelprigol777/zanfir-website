import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zanfir-website.vercel.app"),
  title: "Ótica Zanfir | Óculos de Grau e Sol em Erechim - RS",
  description:
    "Ótica Zanfir - Você vê a diferença. Óculos de grau e sol das melhores marcas: Gucci, YSL, Chloé, Jimmy Choo e mais. Atendimento personalizado no centro de Erechim, RS.",
  keywords: [
    "ótica erechim",
    "óculos de grau erechim",
    "óculos de sol erechim",
    "ótica zanfir",
    "gucci óculos",
    "ysl óculos",
    "lentes erechim",
    "ótica centro erechim",
  ],
  openGraph: {
    title: "Ótica Zanfir | Você vê a diferença",
    description:
      "Óculos de grau e sol das melhores marcas internacionais. Atendimento personalizado no centro de Erechim, RS.",
    url: "https://zanfir-website.vercel.app",
    siteName: "Ótica Zanfir",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/loja-7.jpg",
        width: 1200,
        height: 900,
        alt: "Ótica Zanfir - Fachada da loja",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zanfir-website.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
