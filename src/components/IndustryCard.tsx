
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  name: string;
  icon: React.ReactNode;
  delay?: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  name,
  icon,
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
        "bg-white rounded-xl py-4 px-5 border border-gray-100 shadow-sm card-hover transition-all duration-500 flex items-center space-x-3",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-primary bg-primary/10 p-2 rounded-lg">
        {icon}
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default IndustryCard;
