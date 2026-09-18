
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  className?: string;
}

const ServiceCard = ({ title, description, imageSrc, altText, className }: ServiceCardProps) => {
  return (
    <article className={cn(
      "group flex flex-col h-full bg-card border border-border rounded-md overflow-hidden hover:border-relish-300 transition-colors duration-300",
      className
    )}>
      <div className="h-52 overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={altText}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-display text-xl font-semibold mb-3 text-relish-900">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
