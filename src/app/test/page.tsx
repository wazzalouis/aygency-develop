import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function TestPage() {
  return (
    <div className="min-h-screen">
      {/* Colour tokens */}
      <section className="section-padding bg-primary">
        <SectionContainer>
          <h2 className="font-heading font-semibold text-text-primary text-2xl mb-8">
            Colour Tokens
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 bg-primary rounded-2xl border border-border" />
              <p className="text-sm font-body text-text-secondary">bg-primary</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-secondary rounded-2xl" />
              <p className="text-sm font-body text-text-secondary">bg-secondary</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-tertiary rounded-2xl" />
              <p className="text-sm font-body text-text-secondary">bg-tertiary</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-dark rounded-2xl" />
              <p className="text-sm font-body text-text-secondary">bg-dark</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-accent rounded-2xl" />
              <p className="text-sm font-body text-text-secondary">accent</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-accent-hover rounded-2xl" />
              <p className="text-sm font-body text-text-secondary">accent-hover</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-accent-light rounded-2xl border border-border-light" />
              <p className="text-sm font-body text-text-secondary">accent-light</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-accent-subtle rounded-2xl border border-border-light" />
              <p className="text-sm font-body text-text-secondary">accent-subtle</p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Typography */}
      <section className="section-padding bg-secondary">
        <SectionContainer>
          <h2 className="font-heading font-semibold text-text-primary text-2xl mb-8">
            Typography
          </h2>
          <div className="space-y-6">
            <p className="font-heading font-semibold text-text-primary text-xl">
              Instrument Sans — Heading / Nav / Labels
            </p>
            <p className="font-body text-text-secondary text-lg">
              Inter — Body text, descriptions, and captions. This is the workhorse font for readability.
            </p>
            <p className="font-display italic text-text-primary text-4xl md:text-5xl lg:text-6xl">
              Playfair Display — Editorial Hero Headlines Only
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* Buttons — all variants and sizes */}
      <section className="section-padding bg-primary">
        <SectionContainer>
          <h2 className="font-heading font-semibold text-text-primary text-2xl mb-8">
            Buttons
          </h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-heading text-text-tertiary uppercase tracking-widest mb-4">Default Size</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <div className="bg-accent p-4 rounded-2xl">
                  <Button variant="white">White</Button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-heading text-text-tertiary uppercase tracking-widest mb-4">Large Size</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg">Primary Large</Button>
                <Button variant="secondary" size="lg">Secondary Large</Button>
                <Button variant="ghost" size="lg">Ghost Large</Button>
                <div className="bg-accent p-4 rounded-2xl">
                  <Button variant="white" size="lg">White Large</Button>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* SectionHeading — all alignments and modes */}
      <section className="section-padding bg-secondary">
        <SectionContainer>
          <h2 className="font-heading font-semibold text-text-primary text-2xl mb-12">
            SectionHeading Variants
          </h2>
          <div className="space-y-16">
            <div>
              <p className="text-sm font-heading text-text-tertiary uppercase tracking-widest mb-6">Left Aligned — Sans (default)</p>
              <SectionHeading
                eyebrow="Our Services"
                heading="AI Agents Built for Your Business"
                description="We design, build, and deploy custom AI agent systems that deliver measurable ROI from day one."
              />
            </div>
            <div>
              <p className="text-sm font-heading text-text-tertiary uppercase tracking-widest mb-6">Center Aligned — Sans</p>
              <SectionHeading
                eyebrow="Process"
                heading="How We Work"
                description="A proven process that takes you from idea to live system in weeks, not months."
                align="center"
              />
            </div>
            <div>
              <p className="text-sm font-heading text-text-tertiary uppercase tracking-widest mb-6">Left Aligned — Display (Serif)</p>
              <SectionHeading
                eyebrow="Welcome"
                heading="Operators, Not Consultants"
                description="We build and deploy. We don't just advise."
                display
              />
            </div>
            <div>
              <p className="text-sm font-heading text-text-tertiary uppercase tracking-widest mb-6">Center Aligned — Display (Serif)</p>
              <SectionHeading
                heading="Every Agent Has a Measurable Business Impact"
                align="center"
                display
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Reveal animation */}
      <section className="section-padding bg-primary">
        <SectionContainer>
          <h2 className="font-heading font-semibold text-text-primary text-2xl mb-8">
            Reveal Animations (scroll down)
          </h2>
          <div className="space-y-8">
            <Reveal>
              <div className="bg-secondary p-8 rounded-2xl shadow-card">
                <p className="font-heading font-medium text-text-primary">Reveal — Up (default)</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} direction="left">
              <div className="bg-secondary p-8 rounded-2xl shadow-card">
                <p className="font-heading font-medium text-text-primary">Reveal — Left, 0.1s delay</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} direction="right">
              <div className="bg-secondary p-8 rounded-2xl shadow-card">
                <p className="font-heading font-medium text-text-primary">Reveal — Right, 0.2s delay</p>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      {/* Cards and Shadows */}
      <section className="section-padding bg-secondary">
        <SectionContainer>
          <h2 className="font-heading font-semibold text-text-primary text-2xl mb-8">
            Cards &amp; Shadows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <p className="font-heading font-medium text-text-primary mb-2">Card with shadow</p>
              <p className="font-body text-text-secondary text-sm">Hover to see shadow-card-hover effect.</p>
            </div>
            <div className="bg-primary p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <p className="font-heading font-medium text-text-primary mb-2">Warm shadows</p>
              <p className="font-body text-text-secondary text-sm">Not cool-grey — warm-toned rgba(26,26,26).</p>
            </div>
            <div className="bg-primary p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <p className="font-heading font-medium text-text-primary mb-2">Rounded 2xl</p>
              <p className="font-body text-text-secondary text-sm">Cards use rounded-2xl (16px radius).</p>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
