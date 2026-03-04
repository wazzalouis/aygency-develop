"use client";

import Link from "next/link";
import { Bot, Megaphone, Cog, Search, Check, ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";

const iconMap = {
  "agent-design": Bot,
  "ai-marketing": Megaphone,
  automation: Cog,
  consulting: Search,
} as const;

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-32 pb-20">
        <SectionContainer>
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              heading="What We Build"
              description="We design, build, and deploy AI agent systems that solve real business problems. Each service is tailored to your workflows, your data, and your goals."
              display
            />
          </Reveal>
        </SectionContainer>
      </section>

      {/* Service Cards */}
      <section className="bg-primary section-padding">
        <SectionContainer>
          <div className="flex flex-col gap-8 md:gap-12">
            {services.map((service, i) => {
              const Icon = iconMap[service.slug as keyof typeof iconMap];
              return (
                <Reveal key={service.slug} delay={i * 0.1}>
                  <div className="border border-border rounded-2xl p-8 md:p-12">
                    <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-12">
                      {/* Left — Icon, title, description */}
                      <div>
                        <div className="w-16 h-16 bg-accent-light rounded-xl flex items-center justify-center">
                          <Icon size={36} className="text-accent" />
                        </div>
                        <h3 className="font-heading font-semibold text-2xl text-text-primary mt-6">
                          {service.title}
                        </h3>
                        <p className="font-body text-text-secondary mt-3 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Right — Use cases */}
                      <div className="mt-8 md:mt-0">
                        <p className="font-heading font-medium text-sm text-text-tertiary tracking-widest uppercase mb-4">
                          Example use cases
                        </p>
                        <div className="space-y-3">
                          {service.useCases.map((useCase) => (
                            <div
                              key={useCase}
                              className="flex items-start gap-3"
                            >
                              <Check
                                size={16}
                                className="text-accent mt-1 flex-shrink-0"
                              />
                              <span className="font-body text-text-secondary">
                                {useCase}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link
                          href={`/services/${service.slug}`}
                          className="group inline-flex items-center gap-2 mt-6 text-accent font-heading font-medium text-sm"
                        >
                          <span>Explore {service.shortTitle}</span>
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      {/* CTA Band */}
      <section className="bg-bg-dark py-16">
        <SectionContainer>
          <div className="text-center">
            <Reveal>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white">
                Have a pain point we haven&rsquo;t listed?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-white/70 text-lg mt-4">
                We&rsquo;ve probably solved it. Let&rsquo;s talk.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <Button variant="white" size="lg" href="/contact">
                  Get in Touch
                </Button>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
