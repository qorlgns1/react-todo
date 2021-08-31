import React from 'react';
import TodoListitem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListitem />
      <TodoListitem />
      <TodoListitem />
    </div>
  );
};

export default TodoList;
