import React from 'react';
import ReactDOM from 'react-dom/client';
// component file
import TodoContainer from './components/TodoContainer';

// stylesheet
import './App.css';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
