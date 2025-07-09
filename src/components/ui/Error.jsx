import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const Error = ({ message, onRetry, className }) => {
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
          className="p-4 rounded-full bg-error/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center"
        >
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-error" />
        </motion.div>
        
        <h2 className="text-xl font-display font-bold text-dark-goldenrod mb-3">
          Something Went Wrong
        </h2>
        
        <p className="text-cool-gray mb-6 leading-relaxed">
          {message || "We encountered an issue while seeking wisdom. Please try again."}
        </p>
        
        <div className="space-y-3">
          <Button
            onClick={onRetry}
            variant="primary"
            className="w-full"
          >
            <ApperIcon name="RotateCcw" className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          
          <p className="text-sm text-cool-gray/70">
            If the problem persists, please check your connection and try again later.
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default Error;