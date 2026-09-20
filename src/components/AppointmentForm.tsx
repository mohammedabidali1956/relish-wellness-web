
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const phoneNumber = "917601026596"; // WhatsApp number without + sign

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send data to a backend
    toast({
      title: "Appointment Request Sent",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setName("");
    setPhone("");
    setMessage("");
  };

  const handleWhatsAppRedirect = () => {
    const whatsappMessage = encodeURIComponent(
      `Hello Dr. Mohammed Hamid Ali, I would like to book an appointment at Dr. Hamid's Physio Clinic. My name is ${name || "[Your Name]"} and my phone number is ${phone || "[Your Phone]"}. ${message ? `Additional info: ${message}` : ""}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div className="bg-card border border-border rounded-md p-6 md:p-8">
      <h3 className="font-display text-xl sm:text-2xl font-semibold mb-6 text-relish-900">Book an Appointment</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-relish-500/40 focus:border-relish-500"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-relish-500/40 focus:border-relish-500"
            placeholder="+91 76010 26596"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
            Message (Optional)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-relish-500/40 focus:border-relish-500"
            placeholder="Tell us about your condition or any specific requirements..."
          ></textarea>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            type="button" 
            className="bg-relish-700 hover:bg-relish-800 text-white flex-1 h-12 text-base font-medium rounded-md"
            onClick={handleWhatsAppRedirect}
          >
            Book via WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
