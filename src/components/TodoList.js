import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({todo, onCheckToggle , onInsertToggle, onChangeSelectedTodo}) => {
    return (
    <div className="TodoList">
        {todo.map(todo => (
            <TodoItem 
            todo= {todo} 
            key ={todo.id} 
            onCheckToggle={onCheckToggle}
            onInsertToggle = {onInsertToggle}
            onChangeSelectedTodo = {onChangeSelectedTodo}
            />
        ))}
    </div>
    );
};

export default TodoList;