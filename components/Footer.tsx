import Link from "next/link";
import { BUSINESS } from "@/lib/config";

const PHONE = BUSINESS.phone;
const WHATSAPP_LINK = BUSINESS.whatsapp;
const CURRENT_YEAR = new Date().getFullYear();

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const services = [
  "Demir Hurda Alımı",
  "Bakır Hurda Alımı",
  "Alüminyum Hurda Alımı",
  "Beyaz Eşya & Klima Hurda Alımı",
  "Yerinden Hurda Alımı",
  "Paslanmaz Çelik Alımı",
];

export default function Footer() {
  return (
    <footer
      className="text-gray-300"
      style={{ background: "linear-gradient(135deg, #0F2A44 0%, #1E3A5F 100%)" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top section ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-white/10">
          {/* Brand + description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-bold text-xl text-white hover:text-[#F97316] transition-colors mb-4"
              aria-label="Antalya Hurdacı Ana Sayfa"
            >
                <span className="flex items-center justify-center bg-[#F97316] text-white rounded-lg w-8 h-8 text-xs font-black tracking-wide shrink-0">
                AH
              </span>
              Antalya Hurdacı
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Antalya genelinde demir, bakır ve alüminyum hurda alım satımı
              yapıyoruz. Yerinden alım, güncel fiyat ve anında nakit ödeme.
            </p>
            {/* Contact icon links */}
            <div className="flex gap-2.5">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F97316] transition-colors"
                aria-label="Telefon ile ara"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-green-600 transition-colors"
                aria-label="WhatsApp ile mesaj gönder"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Site links */}
          <nav aria-label="Footer sayfa bağlantıları">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Sayfalar
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#F97316] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#F97316] transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0 text-slate-300" aria-hidden="true">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span>Antalya, Türkiye</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-slate-300" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                  <a href={`tel:${PHONE}`} className="hover:text-[#F97316] transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-green-500" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="text-sm leading-relaxed pt-1 border-t border-white/10">
                <span className="text-blue-200/50 block mb-1">Çalışma Saatleri</span>
                Pzt – Cmt: 08:00 – 20:00
                <br />
                Pazar: 09:00 – 17:00
              </li>
            </ul>
          </address>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-blue-200/50">
          <p>© {CURRENT_YEAR} Antalya Hurdacı. Tüm hakları saklıdır.</p>
          <p className="text-blue-200/40">
            antalya hurdacı · hurda alım satım antalya
          </p>
        </div>
      </div>
    </footer>
  );
}
