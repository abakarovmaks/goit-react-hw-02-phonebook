import React, { Component } from 'react';
import Container from './Components/Container/Container';
import Section from './Components/Section/Section';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
// import { v4 as uuidv4 } from 'uuid';

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

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <ContactList />
        </Section>
      </Container>
    );
  }
}
