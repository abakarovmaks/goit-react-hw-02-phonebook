import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

export default function Contact({ id, name, phone, deleteHandler }) {
  return (
    <li className={styles.contact} key={id}>
      <span className={styles.name}>{name}</span>
      <span className={styles.phone}>{phone}</span>
      <button
        className={styles.btn}
        type="button"
        onClick={deleteHandler}
        data-id={id}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteHandler: PropTypes.string.isRequired,
};
