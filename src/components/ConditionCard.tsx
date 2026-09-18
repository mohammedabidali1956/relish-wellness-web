import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ConditionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  altText: string;
}

const ConditionCard = ({ title, description, imageSrc, slug, altText }: ConditionCardProps) => {
  return (
    <Link
      to={`/conditions/${slug}`}
      className="group flex flex-col h-full bg-card border border-border rounded-md overflow-hidden hover:border-relish-300 transition-colors duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={altText}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-lg font-semibold text-relish-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">{description}</p>
        <span className="mt-5 inline-flex items-center text-sm font-medium text-relish-700 group-hover:text-relish-900 transition-colors">
          Read more
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
};

export default ConditionCard;
