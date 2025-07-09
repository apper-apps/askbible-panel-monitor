import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const DailyVerse = ({ verse, onSave, onShare, className }) => {
  const handleSave = () => {
    onSave({
      type: "verse",
      content: verse,
      tags: ["Daily Verse"]
    });
  };

  const handleShare = () => {
    onShare({
      type: "verse",
      content: verse
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("mb-8", className)}
    >
<Card className="p-6 bg-gradient-to-r from-cream to-light-parchment border-2 border-metallic-gold/30">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
              <ApperIcon name="Sunrise" className="w-6 h-6 text-metallic-gold" />
              <h2 className="text-xl font-display font-bold text-dark-goldenrod">
                Daily Verse
              </h2>
            </div>
            
            <div className="space-y-3">
              <p className="quote-text text-lg leading-relaxed">
                {verse.text}
              </p>
              <div className="verse-citation text-base">
                {verse.reference}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 mt-4 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 sm:mt-0 sm:ml-6">
            <Button
              variant="outline"
              size="default"
              className="sm:!px-4 sm:!py-2 sm:!text-sm"
              onClick={handleShare}
            >
              <ApperIcon name="Share2" className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="secondary"
              size="default"
              className="sm:!px-4 sm:!py-2 sm:!text-sm"
              onClick={handleSave}
            >
              <ApperIcon name="Bookmark" className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default DailyVerse;