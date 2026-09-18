
import { Star } from "lucide-react";

interface ReviewCardProps {
  patientInitials: string;
  rating: number;
  comment: string;
  date?: string;
}

const ReviewCard = ({ patientInitials, rating, comment, date }: ReviewCardProps) => {
  const truncateComment = (text: string, maxLength: number = 250) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="bg-card border border-border rounded-md p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-relish-50 border border-relish-100 flex items-center justify-center text-relish-700 text-sm font-medium mr-3">
          {patientInitials}
        </div>
        <div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < rating ? "text-relish-600 fill-relish-600" : "text-border"}`}
              />
            ))}
          </div>
          {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
        </div>
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed flex-grow">{truncateComment(comment)}</p>
    </div>
  );
};

export default ReviewCard;
