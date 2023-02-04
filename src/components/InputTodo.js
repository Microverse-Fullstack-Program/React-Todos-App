import React, { useState } from 'react';

const InputTodo = () => {
  const [state] = useState({
    title: '',
  });

  const onChange = (e) => {
    setState({
        [e.target.name]: e.target.value
      });
  };

  return (
    <form>
      <input type="text" placeholder="Add Todo..." value={state.title} onChange={onChange} />
      <button type="button">Add</button>
    </form>
  );
};

export default InputTodo;
