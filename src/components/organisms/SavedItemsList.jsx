import { motion, AnimatePresence } from "framer-motion";
import SavedItemCard from "@/components/molecules/SavedItemCard";
import { cn } from "@/utils/cn";

const SavedItemsList = ({ items, onRemove, onShare, className }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="p-4 rounded-full bg-metallic-gold/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">📚</span>
        </div>
        <h3 className="text-lg font-display font-semibold text-dark-goldenrod mb-2">
          No Saved Items Yet
        </h3>
        <p className="text-cool-gray">
          Start saving verses and responses to build your personal wisdom collection
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold text-dark-goldenrod mb-2">
          Your Saved Wisdom
        </h2>
        <p className="text-cool-gray">
          {items.length} saved {items.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {items.map((item) => (
            <SavedItemCard
              key={item.id}
              item={item}
              onRemove={onRemove}
              onShare={onShare}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SavedItemsList;