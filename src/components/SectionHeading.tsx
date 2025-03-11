
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  chip?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
  chip,
}) => {
  return (
    <div
      className={cn(
        "space-y-4 mb-12",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {chip && (
        <div className="inline-block bg-primary/10 text-primary font-medium text-sm px-3 py-1 rounded-full animate-fade-in">
          {chip}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-slide-up">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
