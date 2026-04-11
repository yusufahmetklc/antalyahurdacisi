"use client";

import dynamic from "next/dynamic";

// ssr: false is only valid inside a Client Component
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
});

export default function WhatsAppButtonLazy() {
  return <WhatsAppButton />;
}
