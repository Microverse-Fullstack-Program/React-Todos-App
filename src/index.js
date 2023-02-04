import React from 'react';
import ReactDOM from 'react-dom/client';
// component file
import TodoContainer from './components/TodoContainer';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
