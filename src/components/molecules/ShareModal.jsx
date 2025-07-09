import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const ShareModal = ({ isOpen, onClose, item, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    let textToCopy = "";
    
    if (item.type === "verse") {
      textToCopy = `"${item.content.text}"\n\n${item.content.reference}`;
    } else if (item.type === "response") {
      textToCopy = `Q: ${item.content.question}\n\nA: ${item.content.interpretation}`;
    }
    
    navigator.clipboard.writeText(textToCopy);
    onCopy(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    { name: "Twitter", icon: "Twitter", color: "bg-blue-500" },
    { name: "Facebook", icon: "Facebook", color: "bg-blue-600" },
    { name: "WhatsApp", icon: "MessageCircle", color: "bg-green-500" },
    { name: "Email", icon: "Mail", color: "bg-gray-600" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold text-dark-goldenrod">
                  Share Wisdom
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="p-2"
                >
                  <ApperIcon name="X" className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-light-parchment rounded-lg border border-metallic-gold/20">
                  {item.type === "verse" && (
                    <div className="space-y-2">
                      <div className="verse-citation">
                        {item.content.reference}
                      </div>
                      <p className="quote-text text-sm leading-relaxed">
                        {item.content.text}
                      </p>
                    </div>
                  )}
                  
                  {item.type === "response" && (
                    <div className="space-y-3">
                      <p className="font-medium text-dark-goldenrod">
                        Q: {item.content.question}
                      </p>
                      <p className="text-sm text-cool-gray leading-relaxed">
                        {item.content.interpretation}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleCopy}
                    variant="primary"
                    className="w-full"
                  >
                    <ApperIcon 
                      name={copied ? "Check" : "Copy"} 
                      className="w-4 h-4 mr-2" 
                    />
                    {copied ? "Copied!" : "Copy to Clipboard"}
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    {shareOptions.map((option) => (
                      <Button
                        key={option.name}
                        variant="outline"
                        className={cn(
                          "justify-center",
                          option.color,
                          "text-white border-transparent hover:opacity-90"
                        )}
                        onClick={() => {
                          // Handle social sharing logic here
                          console.log(`Sharing to ${option.name}`);
                        }}
                      >
                        <ApperIcon name={option.icon} className="w-4 h-4 mr-2" />
                        {option.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;