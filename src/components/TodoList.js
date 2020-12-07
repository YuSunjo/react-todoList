import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({todo, onCheckToggle}) => {
    return (
    <div className="TodoList">
        {todo.map(todo => (
            <TodoItem todo= {todo} key ={todo.id} onCheckToggle={onCheckToggle}/>
        ))}
    </div>
    );
};

export default TodoList;