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
      interpretation: "Here's what you can do: First, seek inner wisdom through quiet reflection and meditation about your situation. Second, study spiritual teachings regularly to understand universal principles. Third, connect with others on the spiritual path who can offer guidance. The universe responds to sincere seeking and provides wisdom to those who ask with an open heart.",
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