import responsesData from "@/services/mockData/responses.json";

class ResponseService {
  constructor() {
    this.responses = [...responsesData];
  }

  async generateResponse(question) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Find matching response or create a generic one
    const matchingResponse = this.responses.find(r => 
      r.question.toLowerCase().includes(question.toLowerCase().split(' ')[0]) ||
      question.toLowerCase().includes(r.question.toLowerCase().split(' ')[0])
    );

    if (matchingResponse) {
      return { ...matchingResponse, question };
    }

    // Generate a generic response for unmatched questions
    return {
      Id: Date.now(),
      questionId: Date.now().toString(),
      question,
      interpretation: "Thank you for your question. While I don't have a specific response prepared for this exact question, I encourage you to explore the scriptures and seek guidance through prayer. The Bible contains wisdom for every situation, and God promises to provide guidance to those who seek Him earnestly.",
      verses: [
        {
          reference: "James 1:5",
          text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."
        },
        {
          reference: "Proverbs 2:6",
          text: "For the Lord gives wisdom; from his mouth come knowledge and understanding."
        }
      ],
      relatedTopics: ["Wisdom", "Guidance", "Prayer"]
    };
  }

  async getResponseById(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.responses.find(r => r.Id === parseInt(id));
  }
}

export default new ResponseService();