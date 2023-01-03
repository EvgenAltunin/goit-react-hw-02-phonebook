import React, { Component } from 'react';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    // filter: '',
    // name: '',
    // number: ''
  }

  generateRandomId = shortid.generate();

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  formSubmitHandler = data => {
    console.log(data)
  } 

  render() { 
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
        >
        </ContactForm>
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        >
        </ContactList>
      </div>
    )
  }
}
 
export default App;