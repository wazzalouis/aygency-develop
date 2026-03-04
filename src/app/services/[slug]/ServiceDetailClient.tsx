"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import type { Service, CaseStudy } from "@/types";

const numberMap: Record<string, string> = {
  "agent-design": "01",
  "ai-marketing": "02",
  automation: "03",
  consulting: "04",
};

export default function ServiceDetailClient({
  service,
  relatedStudy,
}: {
  service: Service;
  relatedStudy?: CaseStudy;
}) {
  return (
    <>
      {/* A. Hero */}
      <section className="bg-secondary pt-32 pb-20">
        <SectionContainer>
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-accent font-heading font-medium text-sm tracking-widest uppercase mb-4">
                {numberMap[service.slug] ?? "01"} — {service.shortTitle}
              </p>
              <h1 className="font-display italic text-text-primary text-4xl md:text-5xl lg:text-6xl leading-tight">
                {service.title}
              </h1>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mt-6">
                {service.longDescription}
              </p>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      {/* B. The Problem */}
      <section className="bg-primary section-padding">
        <SectionContainer>
          <div className="max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="The Problem"
                heading="Why this matters"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-text-secondary text-lg leading-relaxed">
                {service.problem}
              </p>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      {/* C. Our Approach */}
      <section className="bg-secondary section-padding">
        <SectionContainer>
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              heading="How we deliver"
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {service.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="bg-primary p-6 md:p-8 rounded-xl border border-border h-full">
                  <p className="text-accent font-heading text-sm font-medium">
                    Step {i + 1}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mt-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-text-secondary mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* D. Related Case Study */}
      {relatedStudy && (
        <section className="bg-primary section-padding">
          <SectionContainer>
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start">
              {/* Left */}
              <div>
                <Reveal>
                  <p className="text-accent font-heading font-medium text-sm tracking-widest uppercase mb-4">
                    Related Case Study
                  </p>
                  <h2 className="font-heading font-semibold text-3xl md:text-4xl text-text-primary">
                    {relatedStudy.title}
                  </h2>
                  <p className="text-sm text-text-tertiary mt-1">
                    {relatedStudy.client}
                  </p>
                  <p className="font-body text-text-secondary mt-4 leading-relaxed">
                    {relatedStudy.challenge.length > 200
                      ? relatedStudy.challenge.slice(0, 200) + "..."
                      : relatedStudy.challenge}
                  </p>
                </Reveal>
              </div>

              {/* Right */}
              <div className="mt-8 md:mt-0">
                <Reveal delay={0.1}>
                  <div className="space-y-3">
                    {relatedStudy.results.map((result) => (
                      <div key={result} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className="text-accent mt-1 flex-shrink-0"
                        />
                        <span className="font-body text-text-secondary">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${relatedStudy.slug}`}
                    className="group inline-flex items-center gap-2 mt-8 text-accent font-heading font-medium text-sm"
                  >
                    <span>Read full case study</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </Reveal>
              </div>
            </div>
          </SectionContainer>
        </section>
      )}

      {/* E. CTA */}
      <section className="bg-secondary section-padding">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-text-primary">
                {service.ctaHeading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-lg text-text-secondary mt-4">
                Book a free discovery call. We&rsquo;ll diagnose your
                highest-impact opportunity in 30 minutes.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <Button variant="primary" size="lg" href="/contact">
                  Book a Discovery Call
                </Button>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
