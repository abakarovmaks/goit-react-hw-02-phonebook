import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const formRefs = e.currentTarget;
    if (name.trim() === '' || number.trim() === '') {
      alert('Fill all fields!');
      formRefs[formRefs.length - 1].blur();
      return;
    }
    this.props.onSubmit(name.trim(), number.trim());
    this.setState({ name: '', number: '' });
    formRefs[formRefs.length - 1].blur();
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmitForm}>
        <label>
          <input
            className={styles.input}
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            value={number}
            name="number"
            placeholder="xxx-xxx-xxx-xx-xx"
            onChange={this.handleChange}
          />
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
