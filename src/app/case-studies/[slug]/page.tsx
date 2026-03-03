import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="section-padding">
      <SectionContainer>
        <SectionHeading
          eyebrow="Case Study"
          heading={params.slug.replace(/-/g, " ")}
          description="Case study details coming soon."
        />
      </SectionContainer>
    </section>
  );
}
