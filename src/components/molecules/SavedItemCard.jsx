import { motion } from "framer-motion";
import { format } from "date-fns";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const SavedItemCard = ({ item, onRemove, onShare, className }) => {
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMM d, yyyy");
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={cn("saved-item", className)}
    >
      <Card className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                {item.type}
              </Badge>
              <span className="text-xs text-cool-gray/60">
                {formatDate(item.savedAt)}
              </span>
            </div>
            
            {item.type === "verse" && (
              <div className="space-y-2">
                <div className="verse-citation text-sm">
                  {item.content.reference}
                </div>
                <p className="text-sm text-cool-gray leading-relaxed">
                  "{truncateText(item.content.text)}"
                </p>
              </div>
            )}
            
            {item.type === "response" && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-dark-goldenrod">
                  Q: {truncateText(item.content.question, 80)}
                </p>
                <p className="text-sm text-cool-gray leading-relaxed">
                  {truncateText(item.content.interpretation)}
                </p>
              </div>
            )}
            
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onShare(item)}
              className="p-2"
            >
              <ApperIcon name="Share2" className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(item.id)}
              className="p-2 text-error hover:text-error hover:bg-error/10"
            >
              <ApperIcon name="Trash2" className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SavedItemCard;