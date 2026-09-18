import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const handleCall = () => {
    window.location.href = "tel:+917601026596";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/917601026596?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20appointment.",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border px-3 py-2.5 shadow-[0_-1px_8px_rgba(16,32,48,0.06)]">
      <div className="flex gap-2.5">
        <Button
          onClick={handleCall}
          className="flex-1 bg-relish-700 hover:bg-relish-800 text-white h-11 rounded-md flex items-center justify-center gap-2 text-sm font-medium"
        >
          <Phone className="w-4 h-4" />
          Call clinic
        </Button>
        <Button
          onClick={handleWhatsApp}
          variant="outline"
          className="flex-1 border-relish-700/40 text-relish-800 hover:bg-relish-50 hover:text-relish-900 h-11 rounded-md flex items-center justify-center gap-2 text-sm font-medium"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
