import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({todo}) => {
    return (
    <div className="TodoList">
        {todo.map(todo => (
            <TodoItem todo= {todo} key ={todo.id}/>
        ))}
    </div>
    );
};

export default TodoList;