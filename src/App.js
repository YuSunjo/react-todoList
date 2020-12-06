import './App.css';
import React, {useState} from 'react';
import Template from './components/Template'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
      checked: true
    },
    {
      id: 2,
      text: "할일2",
      checked: false
    },
    {
      id: 3,
      text: "할일3",
      checked: true
    }
  ])
  return (
    <Template>
      <TodoList todo={todos}/>
    </Template>
  )
}

export default App;
