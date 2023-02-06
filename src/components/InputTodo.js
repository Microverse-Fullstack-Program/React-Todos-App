import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [border, setBorder] = useState({
    border: 'none',
  });

  const { addTodoProps } = props;

  const clearErrorMsg = () => {
    setErrorMsg('');
    setBorder({
      border: 'none',
    });
  };

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
    clearErrorMsg();
  };

  const onBlur = () => clearErrorMsg();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      setErrorMsg('This is required. Please input todo item.');
      setBorder({ border: '1px solid red' });
    }
  };

  const errorMessage = {
    display: 'block',
    color: '#FF0000',
    fontWeight: 'bold',
    padding: '1px 1px 15px 25px',
  };

  return (
    <>
      <span style={errorMessage}>{errorMsg}</span>
      <form onSubmit={handleFormSubmit} onBlur={onBlur} className="form-container">
        <input
          className="input-text"
          style={border}
          type="text"
          name="title"
          placeholder="Add Todo..."
          required
          value={inputText.title}
          onChange={onChange}
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
    </>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
