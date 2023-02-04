import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <li>
        {todo.title}
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
  }
}

export default TodoItem;
