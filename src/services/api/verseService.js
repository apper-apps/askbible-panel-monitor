import versesData from "@/services/mockData/verses.json";

class VerseService {
  constructor() {
    this.verses = [...versesData];
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.verses];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.verses.find(verse => verse.Id === parseInt(id));
  }

  async getDailyVerse() {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Return a random verse for the daily verse
    const randomIndex = Math.floor(Math.random() * this.verses.length);
    return this.verses[randomIndex];
  }

  async getByTopic(topic) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.verses.filter(verse => 
      verse.topic.toLowerCase() === topic.toLowerCase()
    );
  }
}

export default new VerseService();