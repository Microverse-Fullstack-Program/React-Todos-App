import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todoList')),
  );

  // useEffect(() => {
  //   const fetchTodos = localStorage.getItem('todoList');
  //   const loadedTodos = JSON.parse(fetchTodos);

  //   if (loadedTodos) {
  //     if (!todos) {
  //       setTodos(loadedTodos);
  //     } else if (loadedTodos !== todos) {
  //       localStorage.setItem('todoList', JSON.stringify(todos));
  //     }
  //   } else {
  //     localStorage.setItem('todoList', JSON.stringify(todos));
  //   }
  // }, [todos]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleChange = (id) => {
    setTodos((prevState) => {
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id && updatedTitle) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todoList={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
