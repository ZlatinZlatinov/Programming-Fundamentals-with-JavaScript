let phonebook = []; 

function getPhonebook() {
	return phonebook;
} 

function addContact(contact) { // adds a new contact to the phonepook
	phonebook.push(contact);
} 

module.exports = {
	getPhonebook, 
	addContact
} // somehow exports the functions and makes them avaible for other files

/* TODO: done!
	create phonebook array which will store the contacts (but they will be empty each
		time the server is restarted)
	add methods for adding in the phonebook and getting it
	export the methods using module.exports {}
*/