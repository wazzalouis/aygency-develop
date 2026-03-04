import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Contact — Aygency",
  description:
    "Book a free 30-minute discovery call with Aygency. We'll diagnose your highest-impact AI opportunity.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactClient />
    </PageTransition>
  );
}
