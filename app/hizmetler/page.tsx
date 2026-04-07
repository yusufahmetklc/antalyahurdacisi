import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hurda Hizmetlerimiz - Antalya Hurdacı | Hurda Alım Satım",
  description:
    "Antalya Hurdacı olarak demir, bakır, alüminyum, kablo, krom, kurşun ve çinko hurda alımı; fabrika sökümü ve yerinden hurda alım hizmetleri sunuyoruz.",
  keywords: [
    "hurda alım satım",
    "antalya hurda",
    "demir hurda alımı",
    "bakır hurda alımı",
    "alüminyum hurda alımı",
    "kablo hurda alımı",
    "krom hurda alımı",
    "kurşun hurda alımı",
    "çinko hurda alımı",
    "sarı hurda pirinç alımı",
    "fabrika sökümü antalya",
    "çelik çatı sökümü antalya",
    "yerinden hurda alımı antalya",
    "hurda hizmetleri",
  ],
  openGraph: {
    title: "Hurda Hizmetlerimiz - Antalya Hurdacı",
    description:
      "Demir, bakır, alüminyum, kablo, kurşun ve çinko hurda alımı; fabrika sökümü ve yerinden alım. Antalya genelinde hızlı, güvenilir ve en iyi fiyat garantisi.",
    locale: "tr_TR",
    type: "website",
  },
};

import { BUSINESS } from "@/lib/config";

const PHONE = BUSINESS.phone;
const WHATSAPP_LINK = BUSINESS.whatsapp;

// ─── Service data ───────────────────────────────────────────────────────────

const services = [
  {
    id: "demir",
    title: "Demir Hurda Alımı",
    tagline: "Her türlü demir ve çelik hurda",
    description:
      "Hurda demir, inşaat demiri, çelik profil, sac, boru ve daha pek çok demir bazlı malzemenizi güncel piyasa fiyatından satın alıyoruz. Küçük ya da büyük miktarda fark etmeksizin ekibimiz adresinize geliyor.",
    subTypes: ["İnşaat Demiri", "DKP Demir", "Ekstra Demir", "Demir Talaşı", "Çelik Profil", "Çelik Sac", "Boru Hurda"],
    benefits: [
      "Günlük güncellenen piyasa fiyatı",
      "Her ölçek ve miktarda alım",
      "Tartım garantisi — şeffaf işlem",
      "Nakit veya banka transferi seçeneği",
    ],
    accent: "bg-gray-100 text-gray-800",
    iconBg: "bg-gray-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: "bakir",
    title: "Bakır Hurda Alımı",
    tagline: "En yüksek fiyatla bakır değerlendirme",
    description:
      "Bakır kablo, boru, levha, sac, profil ve mix bakır gibi tüm bakır hurdalarınızı en iyi piyasa değeriyle satın alıyoruz. Bakır, en değerli geri dönüştürülebilir metallerden biri olup fiyatımız her gün güncellenmektedir.",
    subTypes: ["Soyma Bakır", "Lama Bakır", "Boru Bakır", "Boyalı Bakır", "Kırkambar Bakır", "Bakır Talaşı"],
    benefits: [
      "Piyasanın üzerinde fiyat teklifi",
      "Kablo, boru, levha — tüm çeşitler",
      "Hızlı değerleme ve anında ödeme",
      "Kilodan bağımsız alım garantisi",
    ],
    accent: "bg-yellow-50 text-yellow-800",
    iconBg: "bg-yellow-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "aluminyum",
    title: "Alüminyum Hurda Alımı",
    tagline: "Hafif metal, ağır para",
    description:
      "Alüminyum profil, kasa, kapı, pencere çerçevesi, sac ve endüstriyel alüminyum atıklarınızı eksiksiz satın alıyoruz. Alüminyum değerlendirmesinde tartım anlaşmazlığını önlemek için kalibreli baskül kullanıyoruz.",
    subTypes: ["Araiş Alüminyum", "Matbaa Alüminyum", "Söküm Alüminyum", "Alüminyum Talaşı", "Profil & Sac", "Alüminyum Kasa"],
    benefits: [
      "Profil, sac, kasa — her form alınır",
      "Kalibreli baskül ile şeffaf tartım",
      "Yerinde değerleme imkânı",
      "Toplu alımlarda özel fiyat",
    ],
    accent: "bg-blue-50 text-blue-800",
    iconBg: "bg-blue-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    id: "sari",
    title: "Sarı & Pirinç Hurda Alımı",
    tagline: "Pirinç, bronz ve sarı metal",
    description:
      "Pirinç, bronz, vana, motor parçaları ve her türlü endüstriyel sarı metal hurdanızı piyasanın en rekabetçi fiyatıyla satın alıyoruz. Sarı metal, yüksek değerinden dolayı özel fiyatlandırma grubunda yer almaktadır.",
    subTypes: ["Pirinç", "Sarı Talaşı", "Kızıl Parça", "Çubuk Sarı", "Bronz", "Sarı Vana"],
    benefits: [
      "Pirinç, bronz, vana — her çeşit",
      "Günlük borsa bazlı fiyat",
      "Anında nakit ödeme",
      "Endüstriyel ve konut kaynaklı alım",
    ],
    accent: "bg-amber-50 text-amber-800",
    iconBg: "bg-amber-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "krom",
    title: "Krom & Paslanmaz Hurda Alımı",
    tagline: "304/316 paslanmaz çelik",
    description:
      "304 ve 316 kalite paslanmaz çelik, krom çelik, mutfak ekipmanları, endüstriyel tanklar ve paslanmaz boru hurdalarınızı değerinde satın alıyoruz. Paslanmaz çelik, kaliteli geri dönüşümü sayesinde yüksek fiyat getirmektedir.",
    subTypes: ["304 Kalite", "316 Kalite", "430 Kalite", "201 Kalite", "Paslanmaz Boru", "Endüstriyel Tank"],
    benefits: [
      "304 ve 316 paslanmaz çelik alımı",
      "Mutfak ekipmanları ve tanklar",
      "Kalite tespiti ücretsiz yapılır",
      "Büyük hacimli endüstriyel alım",
    ],
    accent: "bg-slate-50 text-slate-800",
    iconBg: "bg-slate-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "kablo",
    title: "Kablo Hurda Alımı",
    tagline: "Soyulmuş ve soyulmamış kablo",
    description:
      "NYY, NYAF, alüminyum ve bakır kablo hurdalarınızı soyulmuş ya da soyulmamış haliyle satın alıyoruz. Enerji kablosundan PTT kablosuna, tesisat kablosundan zayıf akım kablosuna kadar her çeşit kablo güncel fiyattan değerlendirilir.",
    subTypes: ["Enerji Kablosu", "TTR Kablo", "Antigron Kablo", "Zayıf Akım Kablosu", "PTT Kablosu", "Tesisat Kablosu", "Kırkambar Kablo"],
    benefits: [
      "NYY, NYAF, bakır, alüminyum kablo",
      "Soyulmuş veya soyulmamış alınır",
      "Kilo bazlı şeffaf fiyatlandırma",
      "Toplu kablo alımında özel teklif",
    ],
    accent: "bg-green-50 text-green-800",
    iconBg: "bg-green-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    id: "kursun",
    title: "Kurşun Hurda Alımı",
    tagline: "Ağır metal, değerli geri dönüşüm",
    description:
      "Akü kurşunu, boru kurşunu, levha kurşun, kablo mantarı ve her türlü kurşun hurdanızı piyasanın en iyi fiyatıyla satın alıyoruz. Kurşun, yüksek yoğunluğu nedeniyle kilodan bağımsız değer taşıyan özel bir metaldir.",
    subTypes: ["Akü Kurşunu", "Boru Kurşun", "Levha Kurşun", "Kablo Mantarı", "Mix Kurşun"],
    benefits: [
      "Akü ve saf kurşun ayrı değerlendirilir",
      "Ağırlık bazlı rekabetçi fiyat",
      "Büyük partilerde araç gönderimi",
      "Anında nakit ödeme",
    ],
    accent: "bg-zinc-100 text-zinc-800",
    iconBg: "bg-zinc-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    id: "cinko",
    title: "Çinko Hurda Alımı",
    tagline: "Galvaniz ve çinko alaşım",
    description:
      "Galvanize çinko, çinko alaşım, döküm parça ve endüstriyel çinko hurdalarınızı güncel borsaya dayalı fiyatlarla değerlendiriyoruz. Çinko, özellikle galvaniz kaplamalı metallerin geri dönüşümünde kritik öneme sahiptir.",
    subTypes: ["Galvaniz Çinko", "Çinko Alaşım", "Döküm Çinko", "Çinko Talaşı", "Mix Çinko"],
    benefits: [
      "Galvaniz ve saf çinko ayrı fiyatlandırma",
      "Döküm ve talaş formları kabul edilir",
      "Günlük borsa takibi ile adil fiyat",
      "Küçük miktarda da alım yapılır",
    ],
    accent: "bg-teal-50 text-teal-800",
    iconBg: "bg-teal-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    ),
  },
  {
    id: "fabrika-sokumu",
    title: "Fabrika Sökümü",
    tagline: "Komple endüstriyel söküm",
    description:
      "Kapanan veya yenilenen fabrikalar, atölyeler ve endüstriyel tesislerdeki tüm makine, ekipman ve metal yapıları profesyonel ekibimizle söküp değerlendiriyoruz. Tek sözleşmeyle baştan sona proje yönetimi sunuyoruz.",
    subTypes: ["Makine ve Ekipman Sökümü", "Metal Konstrüksiyon", "Boru Tesisatı", "Elektrik Paneli", "Endüstriyel Tank", "Kompresör & Motor"],
    benefits: [
      "Komple tesis sökümü tek sözleşmeyle",
      "Lisanslı ve sigortalı ekip",
      "Plan dahilinde hızlı operasyon",
      "Sökümden ödemeye tam hizmet",
    ],
    accent: "bg-red-50 text-red-800",
    iconBg: "bg-red-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: "cati-sokumu",
    title: "Çelik Çatı & Bina Sökümü",
    tagline: "İnşaat ve çatı demiri sökümü",
    description:
      "Eski bina yıkımlarında açığa çıkan çelik çatı konstrüksiyonları, çelik kolonlar, makas sistemleri ve inşaat demirleri ekibimiz tarafından güvenli şekilde sökülür ve kilo başına ödeme yapılır.",
    subTypes: ["Çelik Çatı Makası", "Çelik Kolon & Kiriş", "Oluklu Çatı Sacı", "İnşaat Demiri Sökümü", "Çelik Merdiven", "Metal Kapı & Pencere"],
    benefits: [
      "Güvenli söküm — iş güvenliği öncelikli",
      "Yerinde değerleme ve ödeme",
      "Bina yıkım projeleri kabul edilir",
      "Büyük partilerde özel fiyat",
    ],
    accent: "bg-orange-50 text-orange-800",
    iconBg: "bg-orange-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: "yerinden-alim",
    title: "Yerinden Hurda Alımı",
    tagline: "Siz arayın, biz gelelim",
    description:
      "Antalya genelinde ücretsiz yerinden alım hizmeti sunuyoruz. Fabrika, inşaat, ofis veya ev — nerede olursa olsun ekibimiz geliyor, hurdarınızı tartıyor ve anında ödeme yapıyor. Taşıma derdi yok, yorgunluk yok.",
    subTypes: ["Fabrika & Atölye", "İnşaat Sahası", "Konut & Ofis", "Otel & Restoran", "Hastane & Okul"],
    benefits: [
      "Antalya içi ücretsiz araç gönderimi",
      "Aynı gün hizmet (talebe göre)",
      "Fabrika, inşaat, konut — her lokasyon",
      "Yükleme ve taşıma ekibimizden",
    ],
    accent: "bg-indigo-50 text-indigo-800",
    iconBg: "bg-indigo-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HizmetlerPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* ── Hero / Intro ─────────────────────────────────────────── */}
        <section
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 overflow-hidden"
          aria-labelledby="page-heading"
        >
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" aria-hidden="true" />
              Hurda Alım Satım · Antalya
            </span>

            <h1
              id="page-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5"
            >
              Hurda{" "}
              <span className="text-orange-500">Hizmetlerimiz</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Demir, bakır, alüminyum, kablo, krom, kurşun ve çinko hurda alımından
              fabrika sökümüne kadar kapsamlı hizmet.{" "}
              <strong className="text-white">Ücretsiz yerinden alım</strong> ve
              anında nakit ödeme garantisi.
            </p>

            {/* Quick anchors */}
            <nav aria-label="Hizmet bölümleri" className="flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm font-medium bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full px-4 py-1.5 transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ── Service sections ─────────────────────────────────────── */}
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 sm:py-24 scroll-mt-20 ${isEven ? "bg-white" : "bg-gray-50"}`}
              aria-labelledby={`${service.id}-heading`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual card */}
                  <div className="w-full lg:w-2/5 shrink-0">
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] flex flex-col items-center justify-center gap-6 p-10 relative">
                      {/* Large icon */}
                      <div
                        className={`flex items-center justify-center w-20 h-20 rounded-2xl text-white shadow-lg ${service.iconBg}`}
                      >
                        <span className="scale-150">{service.icon}</span>
                      </div>
                      {/* Tagline */}
                      <span
                        className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${service.accent}`}
                      >
                        {service.tagline}
                      </span>
                      {/* Decorative number */}
                      <span
                        className="absolute bottom-4 right-6 text-8xl font-black text-gray-900/5 select-none leading-none"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-3/5">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${service.accent}`}
                    >
                      {service.tagline}
                    </span>

                    <h2
                      id={`${service.id}-heading`}
                      className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
                    >
                      {service.title}
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-7">
                      {service.description}
                    </p>

                    {/* Benefits list */}
                    <ul className="space-y-3 mb-6" role="list">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span
                            className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-600 shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Sub-types */}
                    {"subTypes" in service && Array.isArray(service.subTypes) && (
                      <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                          Kabul Ettiğimiz Türler
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(service.subTypes as string[]).map((t) => (
                            <span
                              key={t}
                              className={`text-xs font-medium px-3 py-1.5 rounded-full border border-current/20 ${service.accent}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md text-sm"
                        aria-label={`${service.title} için hemen ara`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Hemen Ara
                      </a>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md text-sm"
                        aria-label={`${service.title} için WhatsApp`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                          aria-hidden="true"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                        </svg>
                        WhatsApp&apos;tan Yaz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Bottom CTA banner ─────────────────────────────────────── */}
        <section
          className="bg-orange-600 py-16"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            >
              Hurdanızı Satmaya Hazır mısınız?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Antalya genelinde hurda alım satım hizmeti için hemen arayın.
              En yüksek fiyat ve ücretsiz yerinden alım garantisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base"
                aria-label={`Telefon: ${PHONE}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {PHONE}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base"
                aria-label="WhatsApp ile mesaj gönder"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
                WhatsApp&apos;tan Yaz
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl transition-colors text-base"
              >
                İletişim Formu
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
