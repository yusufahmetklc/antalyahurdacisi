import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SITE_URL } from "@/lib/config";

// Deferred: splits framer-motion into a separate async chunk
const StatsBar = dynamic(() => import("@/components/StatsBar"));

export const metadata: Metadata = {
  title: "Hakkımızda | Antalya Hurdacı",
  description:
    "Antalya Hurdacı olarak 15 yılı aşkın tecrübemizle hurda metal alım satımında güvenilir çözümler sunuyoruz. Şirketimiz, ekibimiz ve çalışma prensiplerini keşfedin.",
  alternates: { canonical: `${SITE_URL}/hakkimizda` },
  openGraph: {
    title: "Hakkımızda | Antalya Hurdacı",
    description:
      "15+ yıllık tecrübeyle Antalya'nın öncü hurda alım satım firması. Güvenilir, şeffaf ve profesyonel hizmet.",
    url: `${SITE_URL}/hakkimizda`,
  },
};

const VALUES = [
  {
    title: "Şeffaflık",
    description:
      "Her işlemde açık tartım, güncel piyasa fiyatı ve anlaşılır fiyatlandırma. Gizli kesinti yok.",
  },
  {
    title: "Güvenilirlik",
    description:
      "On yılı aşkın müşteri ilişkileri ve binlerce tamamlanmış iş ile kazanılmış güven.",
  },
  {
    title: "Hız",
    description:
      "Aynı gün yerinden alım. Zaman kaybetmeden, randevu beklemeden hızlı operasyon.",
  },
  {
    title: "Adil Fiyat",
    description:
      "İstanbul ve Antalya borsasını anlık takip ederek size her zaman en rekabetçi fiyatı sunuyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-32 pb-20"
          style={{ background: "linear-gradient(135deg, #0F2A44 0%, #1E3A5F 100%)" }}
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/60 mb-6">
              Hakkımızda
            </p>
            <h1
              id="about-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white max-w-3xl"
            >
              Antalya&apos;da Güvenilir{" "}
              <span className="text-[#F97316]">Hurda Metal</span>{" "}
              Çözümleri
            </h1>
            <p className="mt-6 text-base text-blue-100/70 leading-relaxed max-w-2xl">
              2009 yılından bu yana Antalya genelinde bireysel ve kurumsal
              müşterilere hurda metal alım satımı, fabrika sökümü ve yerinden
              taşıma hizmetleri sunuyoruz. Her işlemde adil fiyat, şeffaf
              tartım ve anında nakit ödeme ilkemizden taviz vermiyoruz.
            </p>
          </div>
        </section>

        {/* ── Stats bar ───────────────────────────────────────────────── */}
        <StatsBar />

        {/* ── Story + Image ────────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center">
              {/* Text */}
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
                  Hikayemiz
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111827] leading-tight mb-6">
                  15 Yıllık Deneyim,
                  <br />
                  Binlerce Memnun Müşteri
                </h2>
                <div className="space-y-4 text-[#6B7280] leading-relaxed text-base">
                  <p>
                    Firmamız, 2009 yılında Kepez / Antalya&apos;da küçük bir
                    hurda alım noktası olarak kuruldu. Yıllar içinde
                    büyüyerek Antalya genelinde yerinden alım kapasitesine
                    ulaştık; demir, bakır, alüminyum, sarı metal ve kablo
                    hurdası başta olmak üzere her türlü hurda metali
                    profesyonel ekibimizle değerlendiriyoruz.
                  </p>
                  <p>
                    Kurumsal fabrika sökümleri, otel yenileme projeleri ve
                    bireysel ev taşımalarında ortaya çıkan hurda malzemelerin
                    tamamını tek seferlik operasyonla teslim alıyoruz.
                    Müşterilerimizin zamanına saygı duyuyor, tüm işlemleri
                    aynı gün nakit ile kapatıyoruz.
                  </p>
                  <p>
                    Sürdürülebilir bir ekonomi için hurda metalin geri
                    dönüşüme kazandırılması sadece bir iş değil;
                    sorumluluğumuzdur.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-semibold px-6 py-3 text-sm rounded-lg transition-colors duration-150"
                  >
                    Hemen Ara
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border border-[#D1D5DB] hover:border-[#9CA3AF] text-[#6B7280] hover:text-[#111827] font-semibold px-6 py-3 text-sm rounded-lg transition-colors duration-150"
                  >
                    İletişim Formu
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-[46%] shrink-0">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1722695694560-f452b0919d3a?w=1000&q=85"
                    alt="Antalya Hurdacı sahasında hurda metal yüklemesi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                  {/* Metallic corner accent */}
                  <div
                    className="absolute bottom-0 left-0 w-20 h-1"
                    style={{ background: "linear-gradient(to right, #9CA3AF, #D1D5DB, #E5E7EB)" }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ──────────────────────────────────────────────────── */}
        <section className="bg-[#F3F4F6] py-20 lg:py-28" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Çalışma Prensiplerimiz
              </p>
              <h2
                id="values-heading"
                className="text-3xl sm:text-4xl font-black text-gray-900"
              >
                Neden Bizi Seçmelisiniz?
              </h2>
            </header>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-[#D1D5DB] p-6"
                  style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb, #d1d5db, #e5e7eb)" }}
                >
                  <dt className="flex items-start gap-3 mb-3">
                    <span
                      className="text-xs font-black text-[#9CA3AF] leading-none mt-0.5 tabular-nums"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-bold text-[#111827]">
                      {v.title}
                    </span>
                  </dt>
                  <dd className="text-sm text-[#6B7280] leading-relaxed pl-7">
                    {v.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Service area ────────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24" aria-labelledby="area-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">
              <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Hizmet Bölgesi
                </p>
                <h2
                  id="area-heading"
                  className="text-3xl sm:text-4xl font-black text-[#111827]"
                >
                  Antalya&apos;nın Her{" "}
                  <span className="text-[#F97316]">Noktasına</span> Geliyoruz
                </h2>
                <p className="text-[#6B7280] text-base leading-relaxed mb-6 max-w-lg">
                  Kepez, Muratpaşa, Konyaaltı, Döşemealtı, Aksu, Serik,
                  Manavgat, Alanya ve çevre ilçeler dahil Antalya iline bağlı
                  tüm bölgelerde ücretsiz yerinden alım yapıyoruz.
                </p>
                <address className="not-italic space-y-2 text-sm text-[#6B7280]">
                  <p>
                    <strong className="text-[#111827]">Adres:</strong>{" "}
                    {BUSINESS.address.full}
                  </p>
                  <p>
                    <strong className="text-[#111827]">Telefon:</strong>{" "}
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-[#F97316] hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#111827]">E-posta:</strong>{" "}
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-[#F97316] hover:underline"
                    >
                      {BUSINESS.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#111827]">Hafta içi:</strong>{" "}
                    {BUSINESS.hours.weekdays}
                  </p>
                  <p>
                    <strong className="text-[#111827]">Cumartesi:</strong>{" "}
                    {BUSINESS.hours.saturday}
                  </p>
                  <p>
                    <strong className="text-[#111827]">Pazar:</strong>{" "}
                    {BUSINESS.hours.sunday}
                  </p>
                </address>
              </div>

              {/* CTA card */}
              <div className="w-full lg:w-80 shrink-0 rounded-2xl overflow-hidden p-8" style={{ background: "linear-gradient(135deg, #0F2A44 0%, #1E3A5F 100%)" }}>
                <h3 className="text-xl font-black text-white mb-2">
                  Ücretsiz Fiyat Alın
                </h3>
                <p className="text-sm text-blue-100/65 mb-6 leading-relaxed">
                  Hurda metalinizin cinsini ve yaklaşık miktarını bildirin,
                  size anında fiyat bilgisi verelim.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full bg-[#F97316] hover:bg-orange-500 text-white font-semibold px-5 py-3 text-sm rounded-lg transition-colors duration-150 mb-3"
                >
                  {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 text-sm transition-colors duration-150 rounded-lg"
                >
                  WhatsApp ile Yaz
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
