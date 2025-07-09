import { motion } from "framer-motion";
import TopicCard from "@/components/molecules/TopicCard";
import { cn } from "@/utils/cn";

const TopicGrid = ({ topics, onTopicClick, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("space-y-6", className)}
    >
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold text-dark-goldenrod mb-2">
          Explore Topics
        </h2>
        <p className="text-cool-gray">
          Browse common themes and find wisdom for your situation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TopicCard
              topic={topic}
              onClick={onTopicClick}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopicGrid;