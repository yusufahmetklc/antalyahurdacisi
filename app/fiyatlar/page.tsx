import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Hurda Fiyatları - Antalya | Anlık Teklif Al",
  description:
    "Antalya hurda alım fiyatları için bizi arayın veya WhatsApp'tan fotoğraf gönderin. Demir, bakır, alüminyum, kablo, sarı, krom, kurşun ve çinko hurda anlık fiyat.",
  keywords: [
    "antalya hurda fiyatları",
    "demir hurda fiyatı antalya",
    "bakır hurda fiyatı antalya",
    "alüminyum hurda fiyatı antalya",
    "kablo hurda fiyatı",
    "sarı hurda fiyatı",
    "krom hurda fiyatı",
    "kurşun hurda fiyatı",
    "çinko hurda fiyatı",
    "güncel hurda fiyatı öğren",
  ],
  alternates: { canonical: `${SITE_URL}/fiyatlar` },
  openGraph: {
    title: "Hurda Fiyatları - Antalya Hurdacı | Anlık Teklif",
    description:
      "Hurda türünüzü seçin, WhatsApp'tan fotoğraf gönderin — dakikalar içinde anlık fiyat alın. Demir, bakır, alüminyum ve daha fazlası.",
    url: `${SITE_URL}/fiyatlar`,
    locale: "tr_TR",
    type: "website",
  },
};

const PHONE = BUSINESS.phone;
const WA_BASE = "https://wa.me/+905355515916?text=";

const METALS = [
    {
      id: "beyaz-esya",
      title: "Beyaz Eşya & Klima Hurda",
      gradient: "from-cyan-500 to-cyan-800",
      textAccent: "text-cyan-100",
      badge: "bg-cyan-50 text-cyan-800",
      icon: "🧊",
      subTypes: ["Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Klima", "Gün Isı (Güneş Enerjisi)", "Diğer Beyaz Eşya"],
      factors: ["Çalışır/bozuk durumu", "Model ve marka", "Parça/komple alım"],
      waMessage: "Merhaba, beyaz eşya ve klima hurda fiyatı öğrenmek istiyorum.",
    },
  {
    id: "demir",
    title: "Demir & Çelik Hurda",
    gradient: "from-gray-700 to-gray-900",
    textAccent: "text-gray-200",
    badge: "bg-gray-100 text-gray-800",
    icon: "⚙️",
    subTypes: ["İnşaat Demiri", "DKP Demir", "Ekstra Demir", "Demir Talaşı", "Çelik Profil & Sac"],
    factors: ["Malzeme kalitesi (ekstra / standart)", "Yabancı madde oranı", "Toplam ağırlık"],
    waMessage: "Merhaba, demir hurda fiyatı öğrenmek istiyorum.",
  },
  {
    id: "bakir",
    title: "Bakır Hurda",
    gradient: "from-yellow-500 to-orange-600",
    textAccent: "text-yellow-100",
    badge: "bg-yellow-50 text-yellow-800",
    icon: "⚡",
    subTypes: ["Soyma Bakır", "Lama Bakır", "Boru Bakır", "Boyalı Bakır", "Kırkambar Bakır", "Bakır Talaşı"],
    factors: ["Saflık derecesi", "Boyalı / soyulmuş olup olmadığı", "Form (talaş, levha, kablo)"],
    waMessage: "Merhaba, bakır hurda fiyatı öğrenmek istiyorum.",
  },
  {
    id: "aluminyum",
    title: "Alüminyum Hurda",
    gradient: "from-blue-500 to-blue-800",
    textAccent: "text-blue-100",
    badge: "bg-blue-50 text-blue-800",
    icon: "🔩",
    subTypes: ["Araiş Alüminyum", "Matbaa Alüminyum", "Söküm Alüminyum", "Alüminyum Talaşı"],
    factors: ["Tür (araiş / söküm / talaş)", "Yabancı madde karışımı", "Miktar"],
    waMessage: "Merhaba, alüminyum hurda fiyatı öğrenmek istiyorum.",
  },
  {
    id: "kablo",
    title: "Kablo Hurda",
    gradient: "from-green-600 to-green-900",
    textAccent: "text-green-100",
    badge: "bg-green-50 text-green-800",
    icon: "🔌",
    subTypes: ["Enerji Kablosu", "TTR Kablo", "Antigron Kablo", "Tesisat Kablosu", "Zayıf Akım", "PTT Kablosu"],
    factors: ["Soyulmuş mu, soyulmamış mı?", "İletken cinsi (bakır / alüminyum)", "Kablo tipi"],
    waMessage: "Merhaba, kablo hurda fiyatı öğrenmek istiyorum.",
  },
  {
    id: "sari",
    title: "Sarı & Pirinç Hurda",
    gradient: "from-amber-400 to-amber-700",
    textAccent: "text-amber-100",
    badge: "bg-amber-50 text-amber-800",
    icon: "💛",
    subTypes: ["Pirinç", "Sarı Talaşı", "Kızıl Parça", "Çubuk Sarı", "Bronz", "Sarı Vana"],
    factors: ["Alaşım tipi (pirinç / bronz)", "Saflık ve karışım oranı", "Form (talaş / parça / çubuk)"],
    waMessage: "Merhaba, sarı/pirinç hurda fiyatı öğrenmek istiyorum.",
  },
  {
    id: "krom",
    title: "Krom & Paslanmaz",
    gradient: "from-slate-500 to-slate-800",
    textAccent: "text-slate-200",
    badge: "bg-slate-50 text-slate-800",
    icon: "🛡️",
    subTypes: ["304 Kalite", "316 Kalite", "430 Kalite", "201 Kalite"],
    factors: ["Paslanmaz kalite numarası", "Bant testi ile kalite tespiti (ücretsiz)", "Ağırlık"],
    waMessage: "Merhaba, krom/paslanmaz hurda fiyatı öğrenmek istiyorum.",
  },
  {
    id: "kursun",
    title: "Kurşun Hurda",
    gradient: "from-zinc-600 to-zinc-900",
    textAccent: "text-zinc-200",
    badge: "bg-zinc-100 text-zinc-800",
    icon: "🔋",
    subTypes: ["Akü Kurşunu", "Boru Kurşun", "Levha Kurşun", "Kablo Mantarı", "Mix Kurşun"],
    factors: ["Saf kurşun mu, akü kurşunu mu?", "Karışım oranı", "Toplam ağırlık"],
    waMessage: "Merhaba, kurşun hurda fiyatı öğrenmek istiyorum.",
  },
  {
    id: "cinko",
    title: "Çinko Hurda",
    gradient: "from-teal-500 to-teal-800",
    textAccent: "text-teal-100",
    badge: "bg-teal-50 text-teal-800",
    icon: "🧲",
    subTypes: ["Galvaniz Çinko", "Çinko Alaşım", "Döküm Çinko", "Çinko Talaşı"],
    factors: ["Galvaniz kaplama mı, saf çinko mu?", "Alaşım veya döküm türü", "Parti büyüklüğü"],
    waMessage: "Merhaba, çinko hurda fiyatı öğrenmek istiyorum.",
  },
];

const WHY_DYNAMIC = [
  {
    icon: "📈",
    title: "Borsa Bağlantılı",
    desc: "Hurda fiyatları İstanbul Ticaret Borsası ve LME (London Metal Exchange) verilerine göre iş günleri değişir.",
  },
  {
    icon: "⚖️",
    title: "Kaliteye Göre Değişir",
    desc: "Aynı metal türünde bile saflık, yabancı madde oranı ve form fiyatı doğrudan etkiler.",
  },
  {
    icon: "📦",
    title: "Miktara Göre Değişir",
    desc: "Büyük partilerde daha iyi fiyat sunabiliyoruz. Toplu alımlarda özel teklif alın.",
  },
];

export default function FiyatlarPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 overflow-hidden"
          aria-labelledby="page-heading"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" aria-hidden="true" />
              Anlık Fiyat · WhatsApp veya Telefon
            </span>
            <h1
              id="page-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5"
            >
              Hurda{" "}
              <span className="text-orange-500">Fiyat Teklifi</span>{" "}
              Alın
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Hurda türünüzü seçin, WhatsApp&apos;tan fotoğraf gönderin —
              <strong className="text-white"> dakikalar içinde</strong> güncel fiyatı öğrenin.
              Borsa bağlantılı fiyatlar anlık değiştiğinden sabit liste yayınlamıyoruz.
            </p>

            {/* How-to steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { step: "1", text: "Metal türünü seçin" },
                { step: "2", text: "Fotoğraf veya miktar gönderin" },
                { step: "3", text: "Anlık fiyatı öğrenin" },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-extrabold shrink-0">
                    {s.step}
                  </span>
                  <span className="text-sm text-gray-300 font-medium">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why dynamic ────────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-10" aria-label="Neden anlık fiyat?">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Neden Sabit Fiyat Listesi Yoktur?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {WHY_DYNAMIC.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <span className="text-2xl shrink-0" role="img" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Metal cards ────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-16 sm:py-20" aria-label="Metal türleri ve fiyat teklifi">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                Hangi Türde Hurданız Var?
              </h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Metal türünü seçin ve doğrudan WhatsApp mesajı açın — fotoğrafınızı paylaşmanız yeterli.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {METALS.map((metal) => (
                <article
                  key={metal.id}
                  id={metal.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col scroll-mt-24"
                  aria-labelledby={`${metal.id}-title`}
                >
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-br ${metal.gradient} px-5 py-4 flex items-center gap-3`}>
                    <span className="text-2xl" role="img" aria-hidden="true">{metal.icon}</span>
                    <h2
                      id={`${metal.id}-title`}
                      className="text-white font-bold text-base leading-tight"
                    >
                      {metal.title}
                    </h2>
                  </div>

                  <div className="p-5 flex flex-col flex-1 gap-4">
                    {/* Sub-types */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                        Kabul Edilen Türler
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {metal.subTypes.map((t) => (
                          <span
                            key={t}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${metal.badge}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price factors */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                        Fiyatı Etkileyen Faktörler
                      </p>
                      <ul className="space-y-1.5">
                        {metal.factors.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="text-orange-500 font-bold shrink-0 mt-0.5">—</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA buttons */}
                    <div className="mt-auto flex flex-col gap-2 pt-2">
                      <a
                        href={`${WA_BASE}${encodeURIComponent(metal.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                        aria-label={`${metal.title} için WhatsApp fiyat teklifi al`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                        </svg>
                        Fiyat Al — WhatsApp
                      </a>
                      <a
                        href={`tel:${PHONE}`}
                        className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 rounded-xl text-sm transition-colors"
                        aria-label={`${metal.title} için telefon`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        {PHONE}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust strip ────────────────────────────────────────────── */}
        <section className="bg-white border-t border-gray-100 py-12" aria-label="Güven unsurları">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { icon: "⚖️", label: "Şeffaf Tartım" },
                { icon: "💵", label: "Anında Nakit" },
                { icon: "🚛", label: "Ücretsiz Alım" },
                { icon: "📞", label: "7/24 Ulaşılabilir" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <span className="text-3xl" role="img" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm font-bold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ─────────────────────────────────────────────── */}
        <section className="bg-orange-600 py-16" aria-labelledby="fiyat-cta-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="fiyat-cta-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Fiyat Almak Çok Kolay
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Hurdasının fotoğrafını çek, WhatsApp&apos;tan gönder — sana en kısa sürede dönelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${WA_BASE}${encodeURIComponent("Merhaba, hurda fiyatı öğrenmek istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base"
                aria-label="WhatsApp ile fiyat al"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
                WhatsApp&apos;tan Fiyat Al
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base"
                aria-label={`Telefon: ${PHONE}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                {PHONE}
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
