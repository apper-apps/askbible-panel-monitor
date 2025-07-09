import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import { cn } from "@/utils/cn";

const ResponseDisplay = ({ response, onSave, onShare, className }) => {
  const handleSaveVerse = (verse) => {
    onSave({
      type: "verse",
      content: verse,
      tags: response.relatedTopics || []
    });
  };

  const handleSaveResponse = () => {
    onSave({
      type: "response",
      content: {
        question: response.question,
        interpretation: response.interpretation,
        verses: response.verses
      },
      tags: response.relatedTopics || []
    });
  };

  const handleShareVerse = (verse) => {
    onShare({
      type: "verse",
      content: verse
    });
  };

  const handleShareResponse = () => {
    onShare({
      type: "response",
      content: {
        question: response.question,
        interpretation: response.interpretation
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("space-y-6", className)}
    >
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold text-dark-goldenrod mb-4">
          Ancient Wisdom Speaks
        </h2>
      </div>

      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-metallic-gold/10 mt-1">
              <ApperIcon name="MessageCircle" className="w-5 h-5 text-metallic-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-dark-goldenrod mb-2">
                Your Question
              </h3>
              <p className="text-cool-gray leading-relaxed">
                {response.question}
              </p>
            </div>
          </div>

          <div className="border-l-4 border-metallic-gold pl-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-full bg-metallic-gold/10 mt-1">
                <ApperIcon name="BookOpen" className="w-5 h-5 text-metallic-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-dark-goldenrod mb-3">
                  Biblical Guidance
                </h3>
                <p className="response-text mb-6">
                  {response.interpretation}
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShareResponse}
              >
                <ApperIcon name="Share2" className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleSaveResponse}
              >
                <ApperIcon name="Bookmark" className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-display font-semibold text-dark-goldenrod">
          Supporting Verses
        </h3>
        {response.verses.map((verse, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-5 space-y-4">
              <div className="space-y-3">
                <div className="verse-citation">
                  {verse.reference}
                </div>
                <p className="quote-text text-base leading-relaxed">
                  {verse.text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-metallic-gold/20">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShareVerse(verse)}
                  >
                    <ApperIcon name="Share2" className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleSaveVerse(verse)}
                  >
                    <ApperIcon name="Bookmark" className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {response.relatedTopics && response.relatedTopics.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-lg font-display font-semibold text-dark-goldenrod">
            Related Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {response.relatedTopics.map((topic, index) => (
              <Badge key={index} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ResponseDisplay;