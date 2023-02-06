// stylesheet
import './App.css';

import { Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import SinglePage from './pages/SinglePage';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
