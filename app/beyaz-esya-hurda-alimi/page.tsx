import { Metadata } from "next";
import WhiteGoodsHero from "@/components/WhiteGoodsHero";
import WhiteGoodsCategories from "@/components/WhiteGoodsCategories";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Beyaz Eşya ve Klima Hurda Alımı | Antalya Hurdacı",
  description:
    "Çalışır ya da arızalı tüm beyaz eşyalarınızı ve klima sistemlerinizi Antalya genelinde yerinden alıyoruz. Anında tartım, nakit ödeme.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Beyaz Eşya ve Klima Hurda Alımı | Antalya Hurdacı",
    description:
      "Çalışır ya da arızalı beyaz eşya ve klima hurda alımı. Anında tartım, nakit ödeme, ücretsiz araç.",
    type: "website",
  },
};

export default function WhiteGoodsPage() {
  return (
    <>
      <WhiteGoodsHero />
      <WhiteGoodsCategories />
      <ContactCTA />
    </>
  );
}
