import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Todo from './components/Todo';
import Completed from './components/Completed';

function App() {
  return (
    <div className="container">
      <TodoItem />
      <Todo />
      <Completed />
    </div>
  );
}

export default App;
