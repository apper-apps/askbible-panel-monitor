import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const Loading = ({ className, type = "response" }) => {
  const shimmer = "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent";

  if (type === "response") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("space-y-6", className)}
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block p-4 rounded-full bg-metallic-gold/10 mb-4"
          >
            <ApperIcon name="BookOpen" className="w-8 h-8 text-metallic-gold" />
          </motion.div>
          <h2 className="text-2xl font-display font-bold text-dark-goldenrod mb-2">
            Seeking Ancient Wisdom...
          </h2>
          <p className="text-cool-gray">
            Consulting the scriptures for guidance
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-full bg-metallic-gold/10 mt-1">
                <div className="w-5 h-5 bg-metallic-gold/20 rounded skeleton"></div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-metallic-gold/20 rounded skeleton w-24"></div>
                <div className="h-4 bg-metallic-gold/20 rounded skeleton w-full"></div>
                <div className="h-4 bg-metallic-gold/20 rounded skeleton w-3/4"></div>
              </div>
            </div>

            <div className="border-l-4 border-metallic-gold/30 pl-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-metallic-gold/10 mt-1">
                  <div className="w-5 h-5 bg-metallic-gold/20 rounded skeleton"></div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-metallic-gold/20 rounded skeleton w-32"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-metallic-gold/20 rounded skeleton w-full"></div>
                    <div className="h-4 bg-metallic-gold/20 rounded skeleton w-full"></div>
                    <div className="h-4 bg-metallic-gold/20 rounded skeleton w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="h-6 bg-metallic-gold/20 rounded skeleton w-40"></div>
          {[1, 2].map((i) => (
            <Card key={i} className="p-5 space-y-4">
              <div className="space-y-3">
                <div className="h-4 bg-metallic-gold/20 rounded skeleton w-32"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-metallic-gold/20 rounded skeleton w-full"></div>
                  <div className="h-4 bg-metallic-gold/20 rounded skeleton w-5/6"></div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-metallic-gold/20">
                <div className="flex space-x-2">
                  <div className="h-8 bg-metallic-gold/20 rounded skeleton w-16"></div>
                  <div className="h-8 bg-metallic-gold/20 rounded skeleton w-16"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    );
  }

  if (type === "topics") {
    return (
      <div className={cn("space-y-6", className)}>
        <div className="text-center">
          <div className="h-8 bg-metallic-gold/20 rounded skeleton w-48 mx-auto mb-2"></div>
          <div className="h-4 bg-metallic-gold/20 rounded skeleton w-64 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-metallic-gold/10">
                  <div className="w-6 h-6 bg-metallic-gold/20 rounded skeleton"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-5 bg-metallic-gold/20 rounded skeleton w-20"></div>
                  <div className="h-3 bg-metallic-gold/20 rounded skeleton w-full"></div>
                  <div className="h-3 bg-metallic-gold/20 rounded skeleton w-2/3"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center py-12", className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="p-4 rounded-full bg-metallic-gold/10"
      >
        <ApperIcon name="BookOpen" className="w-8 h-8 text-metallic-gold" />
      </motion.div>
    </div>
  );
};

export default Loading;