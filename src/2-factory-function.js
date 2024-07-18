// Section 3
const bankAccountFactory = (defaultBalence = 0) => {
  let balance = defaultBalence
  return {
    checkBalance() {
      return Number(balance)
    },
    add(amount) {
      balance += amount
      console.log(`$${amount} added.`)
    },
    subtract(amount) {
      balance -= amount
      console.log(`$${amount} subtracted.`)
    }
  }
};

module.exports = {
  bankAccountFactory,
};
