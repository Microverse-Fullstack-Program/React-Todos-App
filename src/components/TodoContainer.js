import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import {
  FetchLocalStorage,
  AddToLocalStorage,
  RemoveFromLocalStorage,
} from './PersistInLocalStorage';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: FetchLocalStorage(),
    };
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
    });
    AddToLocalStorage(newTodo);
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.filter((todo) => todo.id !== id)],
    });
    RemoveFromLocalStorage(id);
  };

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id && updatedTitle) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
