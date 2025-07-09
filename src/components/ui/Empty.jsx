import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const Empty = ({ 
  title = "No Results Found", 
  description = "Try asking a different question or explore our topics.",
  icon = "BookOpen",
  actionLabel = "Explore Topics",
  onAction,
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("", className)}
    >
      <Card className="p-8 text-center max-w-md mx-auto">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-full bg-metallic-gold/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center"
        >
          <ApperIcon name={icon} className="w-8 h-8 text-metallic-gold" />
        </motion.div>
        
        <h2 className="text-xl font-display font-bold text-dark-goldenrod mb-3">
          {title}
        </h2>
        
        <p className="text-cool-gray mb-6 leading-relaxed">
          {description}
        </p>
        
        {onAction && (
          <Button
            onClick={onAction}
            variant="primary"
            className="w-full"
          >
            <ApperIcon name="Compass" className="w-4 h-4 mr-2" />
            {actionLabel}
          </Button>
        )}
        
        <div className="mt-6 pt-4 border-t border-metallic-gold/20">
          <p className="text-sm text-cool-gray/70">
            "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you."
          </p>
          <p className="text-sm verse-citation mt-1">
            Matthew 7:7
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default Empty;