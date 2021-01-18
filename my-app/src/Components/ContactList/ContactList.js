import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, deleteHandler }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) =>
        Contact({
          id: contact.id,
          name: contact.name,
          phone: contact.number,
          deleteHandler,
        })
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
