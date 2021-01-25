import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
