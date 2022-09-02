const phonebookController = require('./controllers/phonebook-controller');

module.exports = (app) => {
  app.get('/', phonebookController.index); // it is called whe we load the application
  app.post('/add', phonebookController.addPhonebookPost); // it is called when we add a new contact 
}