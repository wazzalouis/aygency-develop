import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesPage() {
  return (
    <section className="section-padding">
      <SectionContainer>
        <SectionHeading
          eyebrow="Services"
          heading="What We Build"
          description="Custom AI agent systems tailored to your business needs."
        />
      </SectionContainer>
    </section>
  );
}
