import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="section-padding">
      <SectionContainer>
        <SectionHeading
          eyebrow="Service"
          heading={params.slug.replace(/-/g, " ")}
          description="Service details coming soon."
        />
      </SectionContainer>
    </section>
  );
}
