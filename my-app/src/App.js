import React, { Component } from 'react';
import Container from './Components/Container/Container';
import Section from './Components/Section/Section';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default class App extends Component {
  state = {
    contacts: initialState,
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in Phonebook`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(toLowerCaseFilter)
    );
  };

  deleteContact = (e) => {
    const deletedId = e.currentTarget.dataset.id;

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== deletedId
      ),
    }));
    e.currentTarget.blur();
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilter} />
          {filter.trim() ? (
            <ContactList
              contacts={filteredContacts}
              deleteHandler={this.deleteContact}
            />
          ) : (
            <ContactList
              contacts={contacts}
              deleteHandler={this.deleteContact}
            />
          )}
        </Section>
      </Container>
    );
  }
}
