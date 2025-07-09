import { useState, useEffect } from "react";
import responseService from "@/services/api/responseService";
import topicService from "@/services/api/topicService";
import verseService from "@/services/api/verseService";
import savedItemService from "@/services/api/savedItemService";

export const useAskBible = () => {
  const [currentResponse, setCurrentResponse] = useState(null);
  const [topics, setTopics] = useState([]);
  const [dailyVerse, setDailyVerse] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load initial data
  useEffect(() => {
    loadTopics();
    loadDailyVerse();
    loadSavedItems();
  }, []);

  const loadTopics = async () => {
    try {
      const topicsData = await topicService.getAll();
      setTopics(topicsData);
    } catch (err) {
      console.error("Error loading topics:", err);
    }
  };

  const loadDailyVerse = async () => {
    try {
      const verse = await verseService.getDailyVerse();
      setDailyVerse(verse);
    } catch (err) {
      console.error("Error loading daily verse:", err);
    }
  };

  const loadSavedItems = async () => {
    try {
      const items = await savedItemService.getAll();
      setSavedItems(items);
    } catch (err) {
      console.error("Error loading saved items:", err);
    }
  };

  const askQuestion = async (question) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await responseService.generateResponse(question);
      setCurrentResponse(response);
    } catch (err) {
      setError(err.message || "Failed to get response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const askTopicQuestion = async (topic) => {
    await askQuestion(topic.sampleQuestion);
  };

  const saveItem = async (itemData) => {
    try {
      const savedItem = await savedItemService.create(itemData);
      setSavedItems(prev => [savedItem, ...prev]);
      return savedItem;
    } catch (err) {
      setError(err.message || "Failed to save item. Please try again.");
      throw err;
    }
  };

  const removeSavedItem = async (id) => {
    try {
      await savedItemService.delete(id);
      setSavedItems(prev => prev.filter(item => item.Id !== id));
    } catch (err) {
      setError(err.message || "Failed to remove item. Please try again.");
      throw err;
    }
  };

  const clearCurrentResponse = () => {
    setCurrentResponse(null);
  };

  const clearError = () => {
    setError(null);
  };

  return {
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
    retryLastAction: () => {
      // Implement retry logic based on the last action
      if (error) {
        setError(null);
      }
    }
  };
};