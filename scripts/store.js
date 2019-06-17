export const store = {
  items : [],
  error: null,
  hideCheckedItems: false,
  searchTerm: '',
  setError: function(error) {
    this.error = error;
  },

  setSearchTerm: function(term) {
    this.searchTerm = term;
  },

  addItem: function(item) {
    this.items.push(item);
  },

  findById: function(id) {
    return this.items.find(item => item.id === id);
  },

  findAndDelete: function(id) {
    this.items = this.items.filter(item => item.id !== id);
  },

  findAndUpdate: function(id, newData) {
    const item = this.findById(id);
    Object.assign(item, newData);
  },

  toggleCheckedFilter: function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  },

  setItemIsEditing: function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  }
};