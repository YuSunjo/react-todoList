/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Template from 'components/todo/Template';
import TodoList from 'components/todo/TodoList';
import TodoInsert from 'components/todo/TodoInsert';
import { MdAddCircle } from 'react-icons/md';
import './Todo.css';
import { useDispatch, useSelector } from 'react-redux';
import { INSERT_TOGGLE, TODO_ITEM } from '../../reducer/todo';

const Todo = () => {
  const dispatch = useDispatch();
  const { selectedTodo } = useSelector((state) => state.todo);

  const onInsertToggle = () => {
    dispatch({
      type: TODO_ITEM,
      data: null,
    });
    dispatch({
      type: INSERT_TOGGLE,
      data: !selectedTodo,
    });
  };
  return (
    <div>
      <Template>
        <TodoList />
        <div className="add-todo-button" onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {selectedTodo && <TodoInsert />}
      </Template>
    </div>
  );
};

export default Todo;
