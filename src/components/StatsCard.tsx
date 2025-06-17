
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white rounded-xl p-8 border border-gray-100 shadow-sm card-hover transition-all duration-500 text-center",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatsCard;
