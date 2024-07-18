class Phone {

  constructor(phoneNumber, name) {
    this.phoneNumber = phoneNumber
    this.contacts = []
    this.name = name
  }

  makeCall(contactName) {
    const findContact = this.contacts.find((contact) => contact.contactName. === contactName)
    if (findContact !== contactName) {
      return ''
    }
  }

  addContact(newContact) {
    if (!newContact.name || !newContact.phoneNumber || newContact.phoneNumber.length !== 10) {
      return 'Invalid';
    } else {
      this.contacts.push(newContact);
      return `${newContact.name} added.`;
    }

  }

  removeContact(contactName) {
    const findRemove = this.contacts.findIndex((item) => item.name === contactName)
    if (findRemove !== -1) {
      this.contacts.splice(findRemove, 1);
      return `${contactName} removed.`;
    } else {

      return 'Contact not found.';
    }
  }
}



class AppleIPhone extends Phone {

}

module.exports = {
  Phone,
  AppleIPhone,
};
