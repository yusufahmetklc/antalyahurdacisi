/**
 * Central config for business information.
 * Update these values once — they propagate everywhere.
 */
export const SITE_URL = "https://antalyahurdaci.com";

export const BUSINESS = {
  name: "Antalya Hurdacı",
  shortName: "AH",
  phone: "0535 551 59 16",
  /** Full international format for tel: links */
  phoneHref: "tel:+90.5355515916",
  /** WhatsApp deep-link (international, no leading zero) */
  whatsapp: "https://wa.me/+905355515916",
  email: "info@antalyahurdaci.com",
  address: {
    street: "Varsak Karalar Mahallesi",
    district: "Kepez",
    city: "Antalya",
    country: "Türkiye",
    postalCode: "07110",
    full: "Varsak Karalar Mah., Kepez / Antalya",
    /** Google Maps embed URL — replace with exact business pin */
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204823.28856826637!2d30.506852!3d36.896889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39c9a7e9e88c9%3A0x86c4af3fac52b55e!2sAntalya!5e0!3m2!1str!2str!4v1699000000000",
    mapsLink: "https://maps.google.com/?q=Kepez,Antalya,Turkey",
  },
  hours: {
    weekdays: "08:00 – 20:00",
    saturday: "08:00 – 20:00",
    sunday: "09:00 – 17:00",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;
