import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Contact — Aygency",
  description:
    "Book a free 30-minute discovery call with Aygency. We'll diagnose your highest-impact AI opportunity.",
  openGraph: {
    title: "Contact — Aygency",
    description:
      "Book a free 30-minute discovery call with Aygency. We'll diagnose your highest-impact AI opportunity.",
    url: "https://aygency.ai/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Aygency",
    description:
      "Book a free 30-minute discovery call with Aygency. We'll diagnose your highest-impact AI opportunity.",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactClient />
    </PageTransition>
  );
}
