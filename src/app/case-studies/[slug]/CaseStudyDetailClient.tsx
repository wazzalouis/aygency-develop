"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import type { CaseStudy } from "@/types";

export default function CaseStudyDetailClient({
  study,
  nextStudy,
}: {
  study: CaseStudy;
  nextStudy: CaseStudy;
}) {
  return (
    <>
      {/* A. Hero */}
      <section className="bg-secondary pt-32 pb-20">
        <SectionContainer>
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-accent-light text-accent font-heading text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full">
                  {study.industry}
                </span>
                <span className="bg-accent-light text-accent font-heading text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full">
                  {study.service}
                </span>
              </div>
              <h1 className="font-display italic text-text-primary text-4xl md:text-5xl lg:text-6xl leading-tight">
                {study.title}
              </h1>
              <p className="text-text-tertiary text-lg mt-4">
                {study.client}
              </p>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      {/* B. Challenge */}
      <section className="bg-primary section-padding">
        <SectionContainer>
          <div className="max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="The Challenge"
                heading="What they were facing"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-text-secondary text-lg leading-relaxed">
                {study.challenge}
              </p>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      {/* C. Solution */}
      <section className="bg-secondary section-padding">
        <SectionContainer>
          <div className="max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="The Solution"
                heading="What we built"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-text-secondary text-lg leading-relaxed">
                {study.solution}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 mt-8">
                {study.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary border border-border rounded-full px-3 py-1.5 text-xs font-heading text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      {/* D. Results */}
      <section className="bg-primary section-padding">
        <SectionContainer>
          <Reveal>
            <SectionHeading
              eyebrow="The Results"
              heading="Impact"
              align="center"
            />
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
            {study.results.map((result, i) => (
              <Reveal key={result} delay={i * 0.1}>
                <div className="bg-secondary rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="font-heading font-medium text-lg text-text-primary">
                      {result}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Next Case Study link */}
          <Reveal delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href={`/case-studies/${nextStudy.slug}`}
                className="group inline-flex items-center gap-2 text-accent font-heading font-medium text-sm"
              >
                <span>Next Case Study: {nextStudy.title}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </SectionContainer>
      </section>

      {/* E. Quote */}
      <section className="bg-dark py-16 md:py-20">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <p className="text-6xl text-white/30 font-display leading-none mb-4">
                &ldquo;
              </p>
              <blockquote className="text-2xl md:text-3xl text-white font-display italic leading-snug">
                {study.quote}
              </blockquote>
              <p className="text-white/70 font-heading text-sm mt-6">
                &mdash; {study.quoteAttribution}
              </p>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      {/* F. CTA */}
      <section className="bg-secondary section-padding">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-text-primary">
                Have a similar challenge?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-lg text-text-secondary mt-4">
                Book a free discovery call. We&rsquo;ll diagnose your
                highest-impact opportunity in 30 minutes.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Book a Discovery Call
                </Button>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-accent font-heading font-medium text-sm"
                >
                  <span>Or explore our services</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
