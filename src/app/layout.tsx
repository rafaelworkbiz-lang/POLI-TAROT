import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poli Sobral Tarot Store & Instituto de Conciencia",
  description: "Conexión auténtica y transformadora con tus seres queridos desde el otro plano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Poli Sobral Tarot Store & Instituto de Conciencia",
        "image": "https://example.com/Poli Sobral-photo.jpg",
        "description": "Lecturas de Tarot, Rituales y Cursos de Autoconocimiento.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Online",
          "addressCountry": "US"
        },
        "priceRange": "$$",
        "telephone": "+1234567890",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "142"
        }
      },
      {
        "@type": "Product",
        "name": "Curso de Autoconocimiento Místico",
        "description": "Aprende a transformar tu realidad a través del autoconocimiento ancestral.",
        "brand": {
          "@type": "Brand",
          "name": "Instituto de Conciencia"
        },
        "offers": {
          "@type": "Offer",
          "price": "99.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased bg-white text-[#1A1124] selection:bg-[#9D8C6D] selection:text-white`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden font-sans">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

