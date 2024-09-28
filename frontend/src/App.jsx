import { useState } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "ash",
      description: "awwef",
      completed: false
    }
  ]);

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
