const contacts = require('./contacts');

// const argv = require('yargs').argv;    //yargs

const { program } = require('commander'); //  commander

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactList = await contacts.listContacts();
      console.log(contactList);
      break;

    case 'get':
      const aContact = await contacts.getContactById(id);
      console.log(aContact);
      break;

    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const deleContact = await contacts.removeContact(id);
      console.log(deleContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: '9' });
// invokeAction({ action: 'add', name: 'Ottys', email: 'wejhtep@try.ie', phone: '(099)-555432' });
// invokeAction({ action: 'remove', id: '8ESynm1FH5ex43wbo1kYD' });

// invokeAction(argv);

program
  .option('-a, --action <type>')
  .option('-i, --id <type>')
  .option('-n, --name <type>')
  .option('-e, --email <type>')
  .option('-p, --phone <type>');

program.parse(process.argv);
const options = program.opts();
invokeAction(options);
