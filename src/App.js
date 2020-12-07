import './App.css';
import React, {useState} from 'react';
import Template from './components/Template'
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'
import './components/Template.css'
import {MdAddCircle } from 'react-icons/md'

let nextId = 4;
const App = () => {
  const [insertToggle, setInsertToggle] = useState(false)
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
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  };

  const onInsertTodo = (text) => {
    if(text ===""){
        return alert("할 일을 입력해주세요")
    }else{
        const todo = {
          id:nextId,
          text,
          checked:false
        }
        //불변성 지켜주는 것
        setTodos(todos => todos.concat(todo));
        nextId++;
    }
}

const onCheckToggle = (id) => {
  setTodos(todos => 
    todos.map(todo => 
    todo.id === id ? {...todo, checked: !todo.checked} : todo
    )
  );
};
  return (
    <Template todoLength = {todos.length}>
      <TodoList todo={todos} onCheckToggle={onCheckToggle}/>
      <div className="add-todo-button" onClick={onInsertToggle}><MdAddCircle /></div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo}  />}
    </Template>
  )
}

export default App;
