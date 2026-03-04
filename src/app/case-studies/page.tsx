import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies — Aygency",
  description:
    "Real AI agents, deployed in real businesses, delivering real results. See how we've helped companies automate operations and increase ROI.",
  openGraph: {
    title: "Case Studies — Aygency",
    description:
      "Real AI agents, deployed in real businesses, delivering real results. See how we've helped companies automate operations and increase ROI.",
    url: "https://aygency.ai/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Aygency",
    description:
      "Real AI agents, deployed in real businesses, delivering real results. See how we've helped companies automate operations and increase ROI.",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
