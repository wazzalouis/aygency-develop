import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";
import CaseStudyDetailClient from "./CaseStudyDetailClient";
import PageTransition from "@/components/ui/PageTransition";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Aygency Case Study`,
    description: study.challenge,
    openGraph: {
      title: `${study.title} — Aygency Case Study`,
      description: study.challenge,
      url: `https://aygency.ai/case-studies/${slug}`,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${study.title} — Aygency Case Study`,
      description: study.challenge,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const studyIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  if (studyIndex === -1) notFound();

  const study = caseStudies[studyIndex];
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];

  return (
    <PageTransition>
      <CaseStudyDetailClient study={study} nextStudy={nextStudy} />
    </PageTransition>
  );
}
