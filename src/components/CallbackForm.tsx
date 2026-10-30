import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { trackAnalyticsEvent } from "@/lib/analytics";

const CallbackForm = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackAnalyticsEvent("callback_whatsapp_click");

    // Open WhatsApp with pre-filled callback request
    const message = `Callback Request:\nName: ${name}\nPhone: ${phone}\n\nPlease call me back at your earliest convenience.`;
    window.open(
      `https://wa.me/917601026596?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-gradient-to-br from-relish-50 to-wellness-50 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-relish-600 p-2 rounded-full">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Request a Callback</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Continue in WhatsApp with a prepared callback request. Review it and press Send to contact the clinic.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="callback-name" className="sr-only">Your name</label>
        <Input
          type="text"
          id="callback-name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white"
          required
        />
        <label htmlFor="callback-phone" className="sr-only">Your phone number</label>
        <Input
          type="tel"
          id="callback-phone"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white"
          required
        />
        <Button 
          type="submit" 
          className="w-full bg-relish-600 hover:bg-relish-700 text-white"
        >
          Continue in WhatsApp
        </Button>
      </form>
    </div>
  );
};

export default CallbackForm;
