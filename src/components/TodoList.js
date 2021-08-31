import React from 'react';
import TodoListitem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListitem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
