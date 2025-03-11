
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  className,
}) => {
  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="relative z-10 container max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cta-pulse"
            >
              <Link to={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
