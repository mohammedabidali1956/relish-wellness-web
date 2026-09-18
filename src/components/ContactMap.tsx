
import { cn } from "@/lib/utils";

interface ContactMapProps {
  mapEmbedUrl: string;
  className?: string;
}

const ContactMap = ({ mapEmbedUrl, className }: ContactMapProps) => {
  return (
    <div className={cn("h-full", className)}>
      <div className="rounded-md overflow-hidden h-full min-h-[300px] border border-border bg-card">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Hamid's Physio Clinic location on Google Maps"
          className="w-full h-full min-h-[300px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
