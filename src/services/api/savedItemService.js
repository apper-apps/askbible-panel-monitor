import savedItemsData from "@/services/mockData/savedItems.json";

class SavedItemService {
  constructor() {
    this.savedItems = [...savedItemsData];
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.savedItems].sort((a, b) => 
      new Date(b.savedAt) - new Date(a.savedAt)
    );
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.savedItems.find(item => item.Id === parseInt(id));
  }

  async create(itemData) {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const newItem = {
      Id: Math.max(...this.savedItems.map(item => item.Id), 0) + 1,
      ...itemData,
      savedAt: new Date().toISOString()
    };
    
    this.savedItems.push(newItem);
    return newItem;
  }

  async update(id, data) {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const index = this.savedItems.findIndex(item => item.Id === parseInt(id));
    if (index === -1) throw new Error("Item not found");
    
    this.savedItems[index] = { ...this.savedItems[index], ...data };
    return this.savedItems[index];
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = this.savedItems.findIndex(item => item.Id === parseInt(id));
    if (index === -1) throw new Error("Item not found");
    
    const deletedItem = this.savedItems.splice(index, 1)[0];
    return deletedItem;
  }

  async getByType(type) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.savedItems.filter(item => item.type === type);
  }

  async getByTag(tag) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.savedItems.filter(item => 
      item.tags && item.tags.includes(tag)
    );
  }
}

export default new SavedItemService();