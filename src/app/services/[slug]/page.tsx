import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, caseStudies } from "@/lib/data";
import ServiceDetailClient from "./ServiceDetailClient";
import PageTransition from "@/components/ui/PageTransition";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Aygency`,
    description: service.longDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedStudy = service.relatedCaseStudy
    ? caseStudies.find((cs) => cs.slug === service.relatedCaseStudy)
    : undefined;

  return (
    <PageTransition>
      <ServiceDetailClient service={service} relatedStudy={relatedStudy} />
    </PageTransition>
  );
}
