import React from 'react';
import { useSelector } from 'react-redux';
import './Template.css';

const Template = ({ children }) => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="Template">
      <div className="title">오늘의 할 일({todos.length})</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
