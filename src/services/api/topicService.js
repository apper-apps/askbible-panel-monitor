import topicsData from "@/services/mockData/topics.json";

class TopicService {
  constructor() {
    this.topics = [...topicsData];
  }

  async getAll() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400));
    return [...this.topics];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.topics.find(topic => topic.Id === parseInt(id));
  }

  async getByName(name) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.topics.find(topic => 
      topic.name.toLowerCase() === name.toLowerCase()
    );
  }
}

export default new TopicService();