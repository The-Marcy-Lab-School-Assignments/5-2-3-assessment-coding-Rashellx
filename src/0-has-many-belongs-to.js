const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, isDone = false, type) {
    this.id = getId();
    this.description = description
    this.priorityLevel = priorityLevel
    this.isDone = isDone
    this.type = type
  }
  needToDo(item) {
    console.log(`I need to ${this.description} ${item}`);
  }
}


class ToDoList {
  #allItems
  static #allInstances = []
  constructor(name, amount) {
    this.id = getId();
    this.name = name
    this.#allItems = []
    this.amount = amount
    ToDoList.#allInstances.push(this)
  }
  createItem(description, priorityLevel,) {
    const newItem = new ToDoItem(description, priorityLevel,)
    this.#allItems.push(newItem)
    return newItem
  }
  getItems() {
    return [...this.#allItems]
  }
  getCompletedCount() {
    let count = 0
    for (let i = 0; i < this.#allItems.length; i++) {
      if (this.#allItems[i].isDone === true) {
        count += 1
      }
    }
    return count
  }
  static list() {
    return [...ToDoList.#allInstances]
  }
  static findBy(id) {
    return ToDoList.#allInstances.find((item) => item.id === id)
  }
  notes() {
    console.log(`I have to do all of ${this.#allItems}`);
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};