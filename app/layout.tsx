import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL } from "@/lib/config";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  // latin-ext is required for proper Turkish character rendering (ş ğ ü ö ç ı)
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Hurda Alım Satım Hizmeti – En İyi Fiyat Garantisi`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Antalya'nın güvenilir hurdacısı. Demir, bakır, alüminyum hurda alım satımı yapıyoruz. Yerinden hurda alımı, güncel fiyatlar ve hızlı hizmet. Hemen arayın!",
  keywords: [
    "antalya hurdacı",
    "hurda alım satım antalya",
    "demir hurda antalya",
    "bakır hurda alımı",
    "alüminyum hurda",
    "hurda fiyatları antalya",
    "yerinden hurda alımı",
    "kepez hurdacı",
  ],
  authors: [{ name: BUSINESS.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: `${BUSINESS.name} | Hurda Alım Satım Hizmeti`,
    description:
      "Antalya'nın güvenilir hurdacısı. En iyi fiyatlarla demir, bakır, alüminyum hurda alımı yapıyoruz.",
    locale: "tr_TR",
    type: "website",
    siteName: BUSINESS.name,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/sekme-logo.png",
    shortcut: "/sekme-logo.png",
    apple: "/sekme-logo.png",
  },
};

// JSON-LD: LocalBusiness structured data (helps Google surface business in maps & rich results)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.district,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: "TR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "₺₺",
  description:
    "Antalya genelinde demir, bakır ve alüminyum hurda alım satımı. Yerinden ücretsiz alım hizmeti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-full flex flex-col`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
