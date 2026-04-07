"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/config";

const PHONE = BUSINESS.phone;

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  { href: "/iletisim", label: "İletişim" },
];

const SERVICE_ITEMS = [
  { label: "Demir & Çelik Hurda", href: "/hizmetler#demir" },
  { label: "Bakır Hurda", href: "/hizmetler#bakir" },
  { label: "Alüminyum Hurda", href: "/hizmetler#aluminyum" },
  { label: "Sarı & Pirinç Hurda", href: "/hizmetler#sari" },
  { label: "Krom & Paslanmaz", href: "/hizmetler#krom" },
  { label: "Kablo Hurda", href: "/hizmetler#kablo" },
  { label: "Kurşun Hurda", href: "/hizmetler#kursun" },
  { label: "Çinko Hurda", href: "/hizmetler#cinko" },
  { label: "Fabrika Sökümü", href: "/hizmetler#fabrika-sokumu" },
  { label: "Çelik Çatı Sökümü", href: "/hizmetler#cati-sokumu" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isServicesActive = pathname.startsWith("/hizmetler");

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopServicesOpen(true);
  }

  function closeDropdown() {
    closeTimer.current = setTimeout(() => setDesktopServicesOpen(false), 120);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#C8CDD5] shadow-md"
      style={{ background: "linear-gradient(180deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)" }}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2"
        aria-label="Ana navigasyon"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Antalya Hurdacı Ana Sayfa"
        >
          <Image
            src="/logo.png"
            alt="Antalya Hurdacısı – Geri Dönüşüm ve Metal Ticareti"
            width={280}
            height={84}
            className="w-auto object-contain"
            style={{ height: "60px" }}
            priority
            unoptimized
          />
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#0F2A44] bg-white/70 shadow-sm"
                    : "text-[#374151] hover:text-[#0F2A44] hover:bg-white/50"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0F2A44]" />
                )}
              </Link>
            </li>
          ))}

          {/* ── Hizmetler dropdown ── */}
          <li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              className={`relative inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A44] ${
                isServicesActive
                  ? "text-[#0F2A44] bg-white/70 shadow-sm"
                  : "text-[#374151] hover:text-[#0F2A44] hover:bg-white/50"
              }`}
            >
              Hizmetlerimiz
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-150 ${desktopServicesOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
              {isServicesActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0F2A44]" />
              )}
            </button>

            {/* Dropdown panel */}
            <div
              role="menu"
              aria-label="Hizmetler alt menüsü"
              className={`absolute top-full left-0 mt-1 w-56 rounded-xl border border-[#C8CDD5] py-1.5 z-50 transition-all duration-150 origin-top shadow-lg ${
                desktopServicesOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{ background: "linear-gradient(180deg, #F3F4F6 0%, #E5E7EB 100%)" }}
            >
              {SERVICE_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setDesktopServicesOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#374151] hover:text-[#0F2A44] hover:bg-white/60 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
              <div className="my-1.5 border-t border-gray-100" />
              <Link
                href="/hizmetler"
                role="menuitem"
                onClick={() => setDesktopServicesOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-[#0F2A44] hover:bg-white/60 transition-colors"
              >
                Tüm Hizmetleri Gör →
              </Link>
            </div>
          </li>
        </ul>

        {/* ── Desktop CTA + Social ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Social icons */}
          <div className="flex items-center gap-1" aria-label="Sosyal medya">
            {/* Facebook */}
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook sayfamız"
              className="flex items-center justify-center w-8 h-8 rounded-lg text-[#374151] hover:text-[#1877F2] hover:bg-white/60 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.883v2.272h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram sayfamız"
              className="flex items-center justify-center w-8 h-8 rounded-lg text-[#374151] hover:text-[#E1306C] hover:bg-white/60 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href={BUSINESS.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube kanalımız"
              className="flex items-center justify-center w-8 h-8 rounded-lg text-[#374151] hover:text-[#FF0000] hover:bg-white/60 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <span className="w-px h-5 bg-gray-300" aria-hidden="true" />

          {/* Phone CTA */}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm shadow-sm"
            aria-label={`Telefon: ${PHONE}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 shrink-0"
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
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[#374151] hover:text-[#0F2A44] hover:bg-white/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A44]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        role="region"
        aria-label="Mobil menü"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } border-t border-[#C8CDD5]`}
        style={{ background: "linear-gradient(180deg, #E5E7EB 0%, #D1D5DB 100%)" }}
      >
        <ul className="flex flex-col px-4 pt-2 pb-1 gap-0.5" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#0F2A44] bg-white/60 shadow-sm"
                    : "text-[#374151] hover:text-[#0F2A44] hover:bg-white/40"
                }`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" aria-hidden="true" />
                )}
                {link.label}
              </Link>
            </li>
          ))}

          {/* Mobile Hizmetler expandable */}
          <li>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((p) => !p)}
              aria-expanded={mobileServicesOpen}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isServicesActive
                  ? "text-[#0F2A44] bg-white/60 shadow-sm"
                  : "text-[#374151] hover:text-[#0F2A44] hover:bg-white/40"
              }`}
            >
              <span className="flex items-center gap-2">
                {isServicesActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" aria-hidden="true" />
                )}
                Hizmetlerimiz
              </span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-150 ${mobileServicesOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Sub-items */}
            <ul
              className={`overflow-hidden transition-all duration-200 ${
                mobileServicesOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
              }`}
              role="list"
            >
              {SERVICE_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    className="flex items-center gap-2.5 pl-7 pr-3 py-2 text-sm text-[#374151] hover:text-[#0F2A44] hover:bg-white/50 rounded-lg transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/hizmetler"
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  className="flex items-center gap-2.5 pl-7 pr-3 py-2 text-sm font-semibold text-[#0F2A44] hover:bg-white/50 rounded-lg transition-colors"
                >
                  Tüm Hizmetleri Gör →
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile CTA */}
        <div className="px-4 pb-4">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 w-full bg-[#F97316] hover:bg-orange-500 text-white font-semibold px-4 py-3 rounded-xl transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            {PHONE} — Hemen Ara
          </a>
        </div>
      </div>
    </header>
  );
}
