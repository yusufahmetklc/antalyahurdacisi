import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim - Antalya Hurdacı | Hurda Alım Satım Antalya",
  description:
    "Antalya Hurdacı ile iletişime geçin. Telefon, WhatsApp veya form aracılığıyla hurda alım satım taleplerinizi iletin. Antalya genelinde hızlı geri dönüş.",
  keywords: [
    "antalya hurdacı iletişim",
    "hurda alım satım antalya",
    "antalya hurda telefon",
    "hurda satmak istiyorum antalya",
  ],
  openGraph: {
    title: "İletişim - Antalya Hurdacı",
    description:
      "Hurda alım satım için bize ulaşın. Telefon, WhatsApp veya iletişim formu.",
    locale: "tr_TR",
    type: "website",
  },
};

import { BUSINESS } from "@/lib/config";

const PHONE = BUSINESS.phone;
const WHATSAPP_LINK = BUSINESS.whatsapp;

const contactItems = [
  {
    label: "Telefon",
    value: PHONE,
    href: `tel:${PHONE}`,
    external: false,
    description: "Pazartesi – Cumartesi: 08:00 – 20:00",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    icon: (
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
    ),
  },
  {
    label: "WhatsApp",
    value: "Mesaj Gönder",
    href: WHATSAPP_LINK,
    external: true,
    description: "Fotoğraf gönderin, fiyat öğrenin",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    icon: (
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
    ),
  },
  {
    label: "Adres",
    value: "Antalya, Türkiye",
    href: "https://maps.google.com/?q=Antalya,Turkey",
    external: true,
    description: "Antalya genelinde servis veriyoruz",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function IletisimPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* ── Page hero ──────────────────────────────────────────────── */}
        <section
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24 relative overflow-hidden"
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
              7/24 Ulaşılabilir
            </span>
            <h1
              id="page-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
            >
              Bize{" "}
              <span className="text-orange-500">Ulaşın</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Hurda alım satım için telefon, WhatsApp veya formu kullanabilirsiniz.
              Antalya genelinde hızlı geri dönüş garantisi.
            </p>
          </div>
        </section>

        {/* ── Full-width interactive map ────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "500px" }}
          aria-label="Konum haritası"
        >
          {/* Map iframe — full bleed */}
          <iframe
            title="Antalya Hurdacı Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204823.28856826637!2d30.506852!3d36.896889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39c9a7e9e88c9%3A0x86c4af3fac52b55e!2sAntalya!5e0!3m2!1str!2str!4v1699000000000"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Antalya haritası"
          />

          {/* Left info overlay */}
          <div
            className="absolute inset-y-0 left-0 flex items-center"
            style={{ width: "min(420px, 90%)" }}
          >
            {/* Logo ve başlık */}
            <div className="absolute top-8 left-8 flex items-center gap-2.5 z-10">
              <span className="flex items-center justify-center bg-[#F97316] text-white rounded-lg w-8 h-8 text-xs font-black tracking-wide shrink-0">AH</span>
              <span className="font-bold text-lg text-white">Antalya Hurdacı</span>
            </div>
            {/* Gradient fade: opaque → transparent */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(10,20,35,0.97) 68%, transparent 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 px-8 lg:px-12 py-10 w-full">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-3 py-1 text-xs font-semibold mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                Hizmet Bölgemiz
              </span>

              <h2 className="text-2xl font-extrabold text-white leading-tight mb-1">
                Antalya, Türkiye
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                Tüm ilçelere yerinden hurda alım hizmeti
              </p>

              {/* Contact rows */}
              <div className="space-y-3 mb-7">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Ara: ${PHONE}`}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-orange-500/25 transition-colors shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-orange-400"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {PHONE}
                  </span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label="WhatsApp ile mesaj gönder"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-green-500/25 transition-colors shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-green-400"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">
                    WhatsApp&apos;tan Yaz
                  </span>
                </a>
              </div>

              {/* Directions CTA */}
              <a
                href="https://maps.google.com/?q=Antalya,Turkey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
                aria-label="Google Haritalar'da aç"
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
                    d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </section>

        {/* ── Local SEO — hizmet bölgeleri ─────────────────────────── */}
        <div className="bg-[#0F2A44] px-4 py-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-gray-300 leading-relaxed">
              Antalya&apos;nın tüm ilçelerinde hurda alım hizmeti veriyoruz.{" "}
              <span className="text-white font-semibold">
                Kepez, Muratpaşa, Konyaaltı, Lara, Döşemealtı, Aksu, Manavgat, Alanya, Serik, Kaş, Kemer, Kumluca, Finike, Gazipaşa
              </span>{" "}
              ve diğer tüm bölgelerde yerinden hurda alımı yapılır.
            </p>
          </div>
        </div>

        {/* ── Contact info + form ────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

              {/* Left column – contact info */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 h-full flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    İletişim Bilgileri
                  </h2>
                  <ul className="space-y-5" role="list">
                    {contactItems.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <span
                          className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${item.iconBg} ${item.iconColor}`}
                        >
                          {item.icon}
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                            {item.label}
                          </p>
                          <a
                            href={item.href}
                            {...(item.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="font-semibold text-gray-900 hover:text-orange-600 transition-colors"
                          >
                            {item.value}
                          </a>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Quick-dial buttons */}
                  <div className="mt-auto pt-8 flex flex-col gap-3">
                    <a
                      href={`tel:${PHONE}`}
                      className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                      aria-label={`Telefon: ${PHONE}`}
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
                      {PHONE}
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                      aria-label="WhatsApp ile mesaj gönder"
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

              {/* Right column – form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 h-full">
                  <div className="mb-7">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Mesaj Gönderin
                    </h2>
                    <p className="text-sm text-gray-500">
                      Hurda türünü ve miktarını belirtin, size fiyat verelim.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Working hours strip ────────────────────────────────────── */}
        <section
          className="bg-white border-t border-gray-100 py-10"
          aria-label="Çalışma saatleri"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Çalışma Saatlerimiz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { days: "Pazartesi – Cuma", hours: "08:00 – 20:00" },
                { days: "Cumartesi", hours: "08:00 – 20:00" },
                { days: "Pazar", hours: "09:00 – 17:00" },
              ].map((row) => (
                <div
                  key={row.days}
                  className="rounded-xl bg-gray-50 border border-gray-100 px-5 py-4"
                >
                  <p className="text-sm font-semibold text-gray-700">{row.days}</p>
                  <p className="text-orange-600 font-bold mt-0.5">{row.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
