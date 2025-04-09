
import { WhatsApp } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Bonjour, je vous contacte depuis votre site web.",
  className,
}: WhatsAppButtonProps) => {
  // Format phone number - remove any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  
  // Create WhatsApp URL with phone and message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all duration-300",
        "animate-bounce-slow",
        className
      )}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
