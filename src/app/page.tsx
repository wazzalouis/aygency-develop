import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <section className="section-padding">
      <SectionContainer>
        <SectionHeading
          eyebrow="Welcome"
          heading="AI Agents That Solve Real Business Problems"
          description="We design, build, and deploy custom AI agent systems. Weeks, not months."
          display
        />
      </SectionContainer>
    </section>
  );
}
