import { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Textarea from "@/components/atoms/Textarea";
import { cn } from "@/utils/cn";

const QuestionInput = ({ onSubmit, isLoading }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question.trim());
      setQuestion("");
    }
  };

  const exampleQuestions = [
    "How can I find peace in difficult times?",
    "What does the Bible say about forgiveness?",
    "How should I handle conflict with others?",
    "What is the meaning of true love?",
    "How can I overcome fear and anxiety?"
  ];

  const handleExampleClick = (example) => {
    setQuestion(example);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ask for Ancient Wisdom
        </motion.h1>
        <motion.p 
          className="text-lg text-cool-gray max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Seek guidance from timeless Biblical wisdom. Ask any question and receive thoughtful responses rooted in scripture.
        </motion.p>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your question here... (e.g., 'How can I find peace in difficult times?')"
            className="min-h-[120px] text-lg pr-16"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!question.trim() || isLoading}
            className="absolute bottom-4 right-4 px-6 py-2"
            size="sm"
          >
            {isLoading ? (
              <ApperIcon name="Loader2" className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <ApperIcon name="Send" className="w-4 h-4 mr-2" />
                Ask
              </>
            )}
          </Button>
        </div>
      </motion.form>

      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-lg font-display font-semibold text-dark-goldenrod">
          Try these examples:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {exampleQuestions.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="text-left p-3 rounded-lg bg-cream border border-metallic-gold/30 hover:border-metallic-gold hover:bg-gradient-to-r hover:from-cream hover:to-light-parchment transition-all duration-300 text-sm text-cool-gray hover:text-dark-goldenrod"
              disabled={isLoading}
            >
              <ApperIcon name="MessageCircle" className="w-4 h-4 inline mr-2 text-metallic-gold" />
              {example}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionInput;