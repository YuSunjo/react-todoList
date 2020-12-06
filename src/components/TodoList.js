import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todo}) => {
    return (
    <div>
        {todo.map(todo => (
            <TodoItem todo= {todo} key ={todo.id}/>
        ))}
    </div>
    );
};

export default TodoList;