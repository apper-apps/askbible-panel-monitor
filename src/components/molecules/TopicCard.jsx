import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const TopicCard = ({ topic, onClick, className }) => {
  const topicIcons = {
    "Love": "Heart",
    "Forgiveness": "HandHeart",
    "Strength": "Zap",
    "Guidance": "Compass",
    "Peace": "Dove",
    "Wisdom": "BookOpen",
    "Faith": "Star",
    "Hope": "Sunrise",
    "Prayer": "Hands",
    "Comfort": "Shield",
    "Courage": "Sword",
    "Joy": "Sun"
  };

  const getIcon = (topicName) => {
    return topicIcons[topicName] || "Book";
  };

  return (
    <motion.button
      onClick={() => onClick(topic)}
      className={cn(
        "topic-card p-4 rounded-lg text-left w-full group",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-metallic-gold/10 group-hover:bg-metallic-gold/20 transition-colors duration-300">
          <ApperIcon 
            name={getIcon(topic.name)} 
            className="w-6 h-6 text-metallic-gold" 
          />
        </div>
        <div>
          <h3 className="font-display font-semibold text-dark-goldenrod group-hover:text-metallic-gold transition-colors duration-300">
            {topic.name}
          </h3>
          <p className="text-sm text-cool-gray/70 mt-1">
            {topic.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default TopicCard;