import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  display?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  display = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn(isCenter && "text-center")}>
      {eyebrow && (
        <p className="text-accent font-heading font-medium text-sm tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "leading-tight mb-6",
          display
            ? "font-display italic text-text-primary text-4xl md:text-5xl lg:text-6xl"
            : "font-heading font-semibold text-text-primary text-4xl md:text-5xl"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
