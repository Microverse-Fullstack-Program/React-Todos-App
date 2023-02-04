import React from 'react';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      {todo.title}
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
