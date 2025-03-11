
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  className,
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
        "bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all relative overflow-hidden group card-hover",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: "0.1s", transitionDuration: "0.6s" }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-6 -mt-6 transition-all duration-300 group-hover:bg-primary/10"></div>
      <div className="relative z-10">
        <div className="text-primary mb-4 bg-primary/10 p-3 rounded-lg inline-block">
          {icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-2">{value}</h3>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
