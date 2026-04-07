import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import StatsBar from "@/components/StatsBar";
import { BUSINESS, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Antalya Hurdacı | Hurda Alım Satım – Demir, Bakır, Alüminyum",
  description:
    "Antalya genelinde hurda alım satım hizmetleri. Demir, bakır, alüminyum ve paslanmaz çelik hurdalarınızı en yüksek fiyatla satın alıyoruz. Yerinden ücretsiz alım.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Antalya Hurdacı | Hurda Alım Satım",
    description:
      "Demir, bakır, alüminyum hurda alımı. Antalya genelinde ücretsiz yerinden alım, güncel fiyat, anında nakit ödeme.",
    url: SITE_URL,
  },
};

const SERVICES = [
  {
    title: "Demir & Çelik Hurda",
    desc: "Profil, nervürlü demir, sac, I ve H profil, inşaat demirleri.",
    href: "/hizmetler#demir",
  },
  {
    title: "Bakır Hurda",
    desc: "Mix bakır, kırmızı bakır, talaş bakır, kablo ve boru hurda.",
    href: "/hizmetler#bakir",
  },
  {
    title: "Alüminyum Hurda",
    desc: "Profil, sac, döküm alüminyum, kapı-pencere sistemleri.",
    href: "/hizmetler#aluminyum",
  },
  {
    title: "Sarı & Pirinç Hurda",
    desc: "Pirinç, bronz, vana, motor parçaları ve endüstriyel sarı metal.",
    href: "/hizmetler#sari",
  },
  {
    title: "Krom & Paslanmaz",
    desc: "304/316 paslanmaz çelik, mutfak ekipmanları, endüstriyel parçalar.",
    href: "/hizmetler#krom",
  },
  {
    title: "Kablo Hurda",
    desc: "NYY, NYAF, alüminyum ve bakır kablo; soyulmuş veya soyulmamış.",
    href: "/hizmetler#kablo",
  },
];

const REASONS = [
  {
    title: "Ücretsiz Yerinden Alım",
    desc: "Antalya'nın tüm ilçelerine ücretsiz olarak gelip hurda metalinizi teslim alıyoruz.",
  },
  {
    title: "Güncel Piyasa Fiyatı",
    desc: "Borsa fiyatlarını anlık takip ederek her zaman en rekabetçi fiyatı sunuyoruz.",
  },
  {
    title: "Anında Nakit Ödeme",
    desc: "Tartım tamamlandığı an ödeme yapılır. Bekletmeden, harvayle masrafı olmadan.",
  },
  {
    title: "Profesyonel Ekip",
    desc: "Alanında deneyimli teknik ekibimizle güvenli ve hızlı operasyon garantisi.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F3F4F6]">
        <Hero />

        {/* ── Stats Bar ──────────────────────────────────────────────── */}
        <StatsBar />

        {/* ── Services Grid ──────────────────────────────────────────── */}
        <section
          className="py-20 lg:py-28"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-2">
                  Hizmetlerimiz
                </p>
                <h2
                  id="services-heading"
                  className="text-3xl sm:text-4xl font-extrabold text-[#0F2A44]"
                >
                  Ne Tür Hurda Alıyoruz?
                </h2>
              </div>
              <Link
                href="/hizmetler"
                className="text-sm font-semibold text-[#0F2A44] hover:text-slate-600 transition-colors shrink-0"
              >
                Tüm hizmetleri gör →
              </Link>
            </div>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              role="list"
            >
              {SERVICES.map((svc, i) => (
                <li key={svc.title}>
                  <Link
                    href={svc.href}
                    className="group flex flex-col h-full rounded-2xl border border-[#D1D5DB] shadow-sm hover:shadow-md hover:border-[#9CA3AF] p-6 transition-all duration-150"
                    style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb, #d1d5db, #e5e7eb)" }}
                  >
                    <span
                      className="text-xs font-black text-[#9CA3AF] tabular-nums mb-4"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-[#0F2A44] group-hover:text-[#1E3A5F] transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed flex-1">
                      {svc.desc}
                    </p>
                    <span className="mt-5 text-xs font-semibold text-[#9CA3AF] flex items-center gap-1 group-hover:text-[#0F2A44] transition-colors">
                      Detaylar
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why Choose Us ──────────────────────────────────────────── */}
        <section
          className="py-20 lg:py-28 border-t border-[#E5E7EB]"
          aria-labelledby="reasons-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center">

              {/* Image */}
              <div className="w-full lg:w-[44%] shrink-0 order-2 lg:order-1">
                <ImageSlider />
              </div>

              {/* Text */}
              <div className="flex-1 order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-3">
                  Neden Biz?
                </p>
                <h2
                  id="reasons-heading"
                  className="text-3xl sm:text-4xl font-extrabold text-[#0F2A44] mb-8"
                >
                  Güvenilir, Hızlı ve
                  <br />
                  <span className="text-[#F97316]">Adil Fiyatlı</span> Hizmet
                </h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {REASONS.map((r) => (
                    <div key={r.title} className="rounded-xl border border-[#D1D5DB] shadow-sm p-5" style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb, #d1d5db, #e5e7eb)" }}>
                      <dt className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] shrink-0" aria-hidden="true" />
                        <span className="text-sm font-bold text-[#0F2A44]">{r.title}</span>
                      </dt>
                      <dd className="text-xs text-[#6B7280] leading-relaxed pl-3.5">
                        {r.desc}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA Section ────────────────────────────────────────────── */}
        <section
          className="py-20 lg:py-24"
          aria-labelledby="cta-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="relative overflow-hidden rounded-2xl px-8 py-14 lg:px-16 lg:py-20"
              style={{ background: "linear-gradient(135deg, #0F2A44 0%, #1E3A5F 100%)" }}
            >
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-15 pointer-events-none"
                style={{ background: "radial-gradient(circle, #2D4A6B 0%, transparent 70%)" }}
              />
              <div
                aria-hidden="true"
                className="absolute -left-8 bottom-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)" }}
              />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">
                    Ücretsiz Fiyat Alın
                  </p>
                  <h2
                    id="cta-heading"
                    className="text-3xl sm:text-4xl font-extrabold text-white"
                  >
                    Hurda Metalinizi
                    <br />
                    <span className="text-[#F97316]">En Yüksek Fiyata</span> Satın
                  </h2>
                  <p className="mt-3 text-sm text-[#D1D5DB] max-w-md">
                    Cins ve miktar bildirin — anında fiyat, aynı gün alım.
                  </p>
                </div>

                <div className="flex flex-col gap-3 shrink-0">
                  <a
                    href={BUSINESS.phoneHref}
                    aria-label={`Ara: ${BUSINESS.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors duration-150 shadow-lg shadow-orange-900/40"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/></svg>
                    {BUSINESS.phone}
                  </a>
                  <a
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp ile mesaj gönder"
                    className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors duration-150"
                  >
                    WhatsApp ile Yaz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
