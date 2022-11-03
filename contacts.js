const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

async function updateConacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const aContact = contacts.find(c => c.id === contactId);
  return aContact ? aContact : null;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await updateConacts(contacts);
  return newContact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const i = contacts.findIndex(c => c.id === contactId);
  if (i === -1) {
    return null;
  }
  const [deleContact] = contacts.splice(i, 1);
  await updateConacts(contacts);
  return deleContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
