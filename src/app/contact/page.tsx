import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <SectionContainer>
        <SectionHeading
          eyebrow="Contact"
          heading="Let's Build Something"
          description="Tell us about your business challenge. We'll show you what AI agents can do."
          align="center"
        />
      </SectionContainer>
    </section>
  );
}
