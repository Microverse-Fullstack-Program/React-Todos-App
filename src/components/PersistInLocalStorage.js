const FetchLocalStorage = () => {
  let todoList = JSON.parse(localStorage.getItem('todoList'));
  if (!todoList) {
    todoList = [];
  }
  return todoList;
};

const AddToLocalStorage = (newTodo) => {
  const todoList = FetchLocalStorage();
  todoList.push(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const EditLocalStorage = ({ id, title }) => {
  const updateList = FetchLocalStorage();
  updateList.forEach((todo) => {
    if (todo.id === id) {
      // eslint-disable-next-line no-param-reassign
      todo.title = title;
    }
  });
  localStorage.setItem('todoList', JSON.stringify(updateList));
};

const RemoveFromLocalStorage = (id) => {
  const todoList = FetchLocalStorage();
  const newTodoList = todoList.filter((todo) => todo.id !== id);
  localStorage.setItem('todoList', JSON.stringify(newTodoList));
};

export {
  FetchLocalStorage,
  AddToLocalStorage,
  EditLocalStorage,
  RemoveFromLocalStorage,
};
