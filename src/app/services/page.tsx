import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Aygency",
  description:
    "AI agent design, marketing automation, process automation, and strategic consulting. We build AI systems that solve real business problems.",
  openGraph: {
    title: "Services — Aygency",
    description:
      "AI agent design, marketing automation, process automation, and strategic consulting. We build AI systems that solve real business problems.",
    url: "https://aygency.ai/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Aygency",
    description:
      "AI agent design, marketing automation, process automation, and strategic consulting. We build AI systems that solve real business problems.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
