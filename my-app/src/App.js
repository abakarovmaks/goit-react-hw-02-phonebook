import React, { Component } from 'react';
import Container from './Components/Container/Container';
import Section from './Components/Section/Section';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
// import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook"></Section>
        <ContactForm />
        <ContactList />
      </Container>
    );
  }
}
