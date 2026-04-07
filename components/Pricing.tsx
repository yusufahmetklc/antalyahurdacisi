import { BUSINESS } from "@/lib/config";

const PHONE = BUSINESS.phone;

const priceItems = [
  {
    material: "Demir Hurda",
    unit: "kg",
    note: "Hurda demir, çelik, profil vb.",
    color: "bg-gray-100 text-gray-800",
  },
  {
    material: "Bakır Hurda",
    unit: "kg",
    note: "Kablo, boru, sac, mix bakır",
    color: "bg-orange-50 text-orange-700",
  },
  {
    material: "Alüminyum Hurda",
    unit: "kg",
    note: "Profil, sac, kapı, pencere",
    color: "bg-gray-100 text-gray-700",
  },
  {
    material: "Paslanmaz Çelik",
    unit: "kg",
    note: "Mutfak ekipmanları, endüstriyel",
    color: "bg-slate-100 text-slate-800",
  },
];

export default function Pricing() {
  return (
    <section
      id="fiyatlar"
      className="py-20 bg-white"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
            Güncel Hurda Fiyatları
          </span>
          <h2
            id="pricing-heading"
            className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            Hurda Alım Fiyatları
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Fiyatlarımız her gün piyasa koşullarına göre güncellenmektedir.
            Güncel fiyat için bizi arayın.
          </p>
        </div>

        {/* Price disclaimer banner */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 text-sm text-amber-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          <p>
            <strong>Dikkat:</strong> Hurda metal fiyatları borsa ve döviz
            kuruna bağlı olarak günlük değişkenlik göstermektedir. Kesin fiyat
            için lütfen bizi arayınız.
          </p>
        </div>

        {/* Price table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left text-sm" aria-label="Hurda fiyat tablosu">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th scope="col" className="px-6 py-4 font-semibold">
                  Hurda Türü
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Birim
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Fiyat
                </th>
                <th scope="col" className="px-6 py-4 font-semibold hidden sm:table-cell">
                  Notlar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {priceItems.map((item, index) => (
                <tr
                  key={item.material}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-orange-50 transition-colors`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {item.material}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.unit}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${item.color}`}>
                      Günlük Güncellenir
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 hidden sm:table-cell">
                    {item.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA below table */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Güncel hurda fiyatları ve ücretsiz değerleme için arayın:
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md"
            aria-label={`Fiyat öğrenmek için ara: ${PHONE}`}
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
            {PHONE} — Fiyat Öğren
          </a>
        </div>
      </div>
    </section>
  );
}
