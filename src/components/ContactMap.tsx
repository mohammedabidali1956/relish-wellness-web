
import { cn } from "@/lib/utils";
import { ExternalLink, MapPin } from "lucide-react";

interface ContactMapProps {
  mapEmbedUrl: string;
  externalMapUrl?: string;
  className?: string;
}

const ContactMap = ({ mapEmbedUrl, externalMapUrl, className }: ContactMapProps) => {
  return (
    <div className={cn("h-full flex flex-col", className)}>
      <div className="rounded-md overflow-hidden flex-1 min-h-[300px] border border-border bg-card">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Hamid's Physio and Pain Clinic location on Google Maps"
          className="w-full h-full min-h-[300px]"
        ></iframe>
      </div>
      {externalMapUrl && (
        <div className="mt-3 flex items-center justify-between px-1">
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-relish-600" />
            Puppalguda, Manikonda, Hyderabad
          </span>
          <a
            href={externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-relish-700 hover:text-relish-900 transition-colors"
          >
            Get directions on Google Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactMap;
