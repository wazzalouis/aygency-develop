"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/data";

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-32 pb-20">
        <SectionContainer>
          <Reveal>
            <SectionHeading
              eyebrow="Case Studies"
              heading="Systems we've shipped"
              description="Real AI agents, deployed in real businesses, delivering real results."
              display
            />
          </Reveal>
        </SectionContainer>
      </section>

      {/* Grid */}
      <section className="bg-primary section-padding">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.1}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block bg-primary border border-border rounded-2xl overflow-hidden hover:shadow-card-hover hover:translate-y-[-2px] transition-all duration-300 h-full"
                >
                  {/* Accent strip */}
                  <div className="h-1 bg-accent" />

                  <div className="p-8">
                    {/* Industry tag */}
                    <p className="text-accent font-heading font-medium text-xs tracking-widest uppercase">
                      {study.industry}
                    </p>

                    {/* Title */}
                    <h3 className="font-heading font-semibold text-2xl text-text-primary mt-3">
                      {study.title}
                    </h3>

                    {/* Client */}
                    <p className="text-sm text-text-tertiary mt-1">
                      {study.client}
                    </p>

                    {/* Challenge excerpt */}
                    <p className="font-body text-text-secondary mt-4 leading-relaxed text-sm">
                      {study.challenge.length > 140
                        ? study.challenge.slice(0, 140) + "..."
                        : study.challenge}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-border my-6" />

                    {/* Key result */}
                    <div>
                      <span className="text-3xl font-heading font-bold text-accent">
                        {study.keyMetric.value}
                      </span>
                      <p className="text-sm text-text-secondary mt-1">
                        {study.keyMetric.label}
                      </p>
                    </div>

                    {/* Link */}
                    <div className="inline-flex items-center gap-2 mt-6 text-accent font-heading font-medium text-sm">
                      <span>Read case study</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
