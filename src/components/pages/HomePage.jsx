import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import QuestionInput from "@/components/molecules/QuestionInput";
import ResponseDisplay from "@/components/organisms/ResponseDisplay";
import TopicGrid from "@/components/organisms/TopicGrid";
import DailyVerse from "@/components/organisms/DailyVerse";
import SavedItemsList from "@/components/organisms/SavedItemsList";
import ShareModal from "@/components/molecules/ShareModal";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { useAskBible } from "@/hooks/useAskBible";
import { cn } from "@/utils/cn";

const HomePage = () => {
  const {
    currentResponse,
    topics,
    dailyVerse,
    savedItems,
    loading,
    error,
    askQuestion,
    askTopicQuestion,
    saveItem,
    removeSavedItem,
    clearCurrentResponse,
    clearError,
    retryLastAction
  } = useAskBible();

  const [activeTab, setActiveTab] = useState("ask");
  const [shareModal, setShareModal] = useState({ isOpen: false, item: null });

  const handleQuestionSubmit = async (question) => {
    await askQuestion(question);
    if (activeTab !== "ask") {
      setActiveTab("ask");
    }
  };

  const handleTopicClick = async (topic) => {
    await askTopicQuestion(topic);
    setActiveTab("ask");
  };

  const handleSaveItem = async (itemData) => {
    try {
      await saveItem(itemData);
      toast.success("Item saved successfully!");
    } catch (err) {
      toast.error("Failed to save item. Please try again.");
    }
  };

  const handleRemoveSavedItem = async (id) => {
    try {
      await removeSavedItem(id);
      toast.success("Item removed successfully!");
    } catch (err) {
      toast.error("Failed to remove item. Please try again.");
    }
  };

  const handleShareItem = (item) => {
    setShareModal({ isOpen: true, item });
  };

  const handleCopyToClipboard = (text) => {
    toast.success("Copied to clipboard!");
  };

  const handleRetry = () => {
    clearError();
    retryLastAction();
  };

  const handleNewQuestion = () => {
    clearCurrentResponse();
    clearError();
  };

  const tabs = [
    { id: "ask", label: "Ask Question", icon: "MessageCircle" },
    { id: "topics", label: "Topics", icon: "Grid3x3" },
    { id: "saved", label: "Saved Items", icon: "Bookmark" }
  ];

  return (
    <div className="min-h-screen bg-light-parchment">
      {/* Header */}
      <header className="bg-gradient-to-r from-cream to-light-parchment border-b border-metallic-gold/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-metallic-gold/10">
                <ApperIcon name="BookOpen" className="w-8 h-8 text-metallic-gold" />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold gradient-text">
                  AskBible
                </h1>
                <p className="text-sm text-cool-gray">
                  Ancient wisdom for modern life
                </p>
              </div>
            </div>

            <nav className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-metallic-gold text-white shadow-lg shadow-metallic-gold/30"
                      : "text-cool-gray hover:bg-cream hover:text-dark-goldenrod"
                  )}
                >
                  <ApperIcon name={tab.icon} className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Daily Verse */}
        {dailyVerse && (
          <DailyVerse
            verse={dailyVerse}
            onSave={handleSaveItem}
            onShare={handleShareItem}
          />
        )}

        {/* Tab Content */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === "ask" && (
              <motion.div
                key="ask"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <QuestionInput
                  onSubmit={handleQuestionSubmit}
                  isLoading={loading}
                />

                {error && (
                  <Error
                    message={error}
                    onRetry={handleRetry}
                  />
                )}

                {loading && (
                  <Loading type="response" />
                )}

                {currentResponse && !loading && !error && (
                  <div className="space-y-6">
                    <ResponseDisplay
                      response={currentResponse}
                      onSave={handleSaveItem}
                      onShare={handleShareItem}
                    />
                    
                    <div className="text-center">
                      <Button
                        variant="outline"
                        onClick={handleNewQuestion}
                      >
                        <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
                        Ask Another Question
                      </Button>
                    </div>
                  </div>
                )}

                {!currentResponse && !loading && !error && (
                  <div className="text-center py-12">
                    <div className="p-4 rounded-full bg-metallic-gold/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <ApperIcon name="MessageCircle" className="w-8 h-8 text-metallic-gold" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-dark-goldenrod mb-2">
                      Ask Your Question
                    </h3>
                    <p className="text-cool-gray">
                      Type your question above or explore topics to get started
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "topics" && (
              <motion.div
                key="topics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {topics.length > 0 ? (
                  <TopicGrid
                    topics={topics}
                    onTopicClick={handleTopicClick}
                  />
                ) : (
                  <Loading type="topics" />
                )}
              </motion.div>
            )}

            {activeTab === "saved" && (
              <motion.div
                key="saved"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SavedItemsList
                  items={savedItems}
                  onRemove={handleRemoveSavedItem}
                  onShare={handleShareItem}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModal.isOpen}
        item={shareModal.item}
        onClose={() => setShareModal({ isOpen: false, item: null })}
        onCopy={handleCopyToClipboard}
      />
    </div>
  );
};

export default HomePage;