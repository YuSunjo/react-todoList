/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-const-assign */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  CREATE_TODOS,
  INSERT_TOGGLE,
  TODO_REMOVE,
  TODO_UPDATE,
} from 'reducer/todo';
import { TiPencil, TiTrash } from 'react-icons/ti';
import './TodoInsert.css';

let nextId = 4;
const TodoInsert = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { todos, selectedTodo, selectedTodoItem } = useSelector(
    (state) => state.todo,
  );

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력해주세요');
    }
    const todo = {
      id: nextId,
      text,
      checked: false,
    };
    dispatch({
      type: CREATE_TODOS,
      data: todos.concat(todo),
    });
    nextId += 1;
  };

  const onInsertToggle = () => {
    dispatch({
      type: INSERT_TOGGLE,
      data: !selectedTodo,
    });
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  };

  const onRemove = (id) => {
    onInsertToggle();
    dispatch({
      type: TODO_REMOVE,
      data: id,
    });
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    dispatch({
      type: TODO_UPDATE,
      id,
      text,
    });
  };

  return (
    <div>
      <div className="background" onClick={onInsertToggle} />
      <form onSubmit={onSubmit}>
        <input placeholder="placeholder" value={value} onChange={onChange} />
        {selectedTodoItem ? (
          <div className="rewrite">
            <TiPencil onClick={() => onUpdate(selectedTodoItem.id, value)} />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodoItem.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
