"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import { BUSINESS } from "@/lib/config";

const CATEGORIES = [
  {
    title: "Buzdolabı Hurda",
    description: "Çalışır ya da bozuk buzdolaplarınızı alıyoruz.",
    features: ["Anında tartım", "Ücretsiz taşıma", "Nakit ödeme"],
    whatsappMsg:
      "Merhaba, buzdolabı hurdası satmak istiyorum. Fiyat bilgisi alabilir miyim?",
    icon: "🧊",
  },
  {
    title: "Çamaşır Makinesi Hurda",
    description: "Her türlü çamaşır makinesi (tam otomatik, yarı otomatik).",
    features: ["Kolay taşıma", "Hızlı değerleme", "En yüksek fiyat"],
    whatsappMsg:
      "Merhaba, çamaşır makinesi hurdası satmak istiyorum. Fiyat bilgisi alabilir miyim?",
    icon: "🔄",
  },
  {
    title: "Klima Hurda",
    description: "Çalışır, arızalı veya eski klima sistemlerini yerinden alıyoruz.",
    features: ["Asansörlü araç", "Profesyonel çıkartma", "Yerinden alım"],
    whatsappMsg:
      "Merhaba, klima hurdası satmak istiyorum. Fiyat bilgisi alabilir miyim?",
    icon: "❄️",
  },
  {
    title: "Güneş Enerjisi (Gün Isı)",
    description: "Eski ya da arızalı güneş enerjisi panellerini satın alıyoruz.",
    features: ["Demantaj hizmeti", "Yüksek fiyat", "Hızlı alım"],
    whatsappMsg:
      "Merhaba, güneş enerjisi sistemi hurdası satmak istiyorum. Fiyat bilgisi alabilir miyim?",
    icon: "☀️",
  },
];

export default function WhiteGoodsCategories() {
  return (
    <section
      className="py-20 bg-white overflow-hidden"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="block w-6 h-px bg-orange-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              aria-hidden="true"
            />
            Almış Olduğumuz Ürünler
            <motion.span
              className="block w-6 h-px bg-orange-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "right" }}
              aria-hidden="true"
            />
          </motion.span>

          <motion.h2
            id="categories-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            Ürün Kategorileri
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-500 max-w-xl mx-auto text-lg"
          >
            Her kategori için özel değerleme ve hızlı taşıma hizmeti sunuyoruz.
          </motion.p>
        </div>

        {/* Categories grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.11 },
            },
          }}
        >
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 52 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{category.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {category.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 mb-6">
                {category.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs font-medium text-gray-500"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <a
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(category.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-xs font-semibold px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
              >
                WhatsApp ile Sorguştur
              </a>

              {/* Bottom border line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "left", width: "100%" }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
