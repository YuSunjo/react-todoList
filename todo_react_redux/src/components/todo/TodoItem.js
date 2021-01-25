/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import './TodoItem.css';
import { INSERT_TOGGLE, TODO_CHECK, TODO_ITEM } from 'reducer/todo';

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  const { selectedTodo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const onInsertToggle = () => {
    dispatch({
      type: INSERT_TOGGLE,
      data: !selectedTodo,
    });
  };
  const onChangeSelectedTodo = (item) => {
    dispatch({
      type: TODO_ITEM,
      data: item,
    });
  };

  const onClick = () => {
    onChangeSelectedTodo(todo);
    onInsertToggle();
  };

  const onCheckToggle = (data) => {
    dispatch({
      type: TODO_CHECK,
      data,
    });
  };

  return (
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div onClick={onClick}>{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
