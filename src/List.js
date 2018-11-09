import React, { Component } from 'react';
import { List, Checkbox, Button } from '@QCFE/lego-ui';

class TodoList extends Component {

//toggle todo 的完成状态
toggleTodo = (todo) => {
  //改变 todo isFinished 的值

  if (todo.isFinished) {
    todo.isFinished = false;
  } else {
    todo.isFinished = true;
  }

  this.props.updateTodo(todo);
}

deleteTodo = (todo) => {
  this.props.deleteTodo(todo);
}

itemRenderer = (todo) => {
  return (
    <li 
      key = {todo.title}
      className="todo-item"
    >
      <Checkbox
      checked={todo.isFinished}
      onChange={() => { this.toggleTodo(todo)}}
      />
      {todo.title}
      <Button 
      className="btn"
      type="danger"
      onClick={() => { this.deleteTodo(todo)}}
      >
      Del
      </Button>
    </li>
  );
}

  // render() {
  //   const { todos, nowShowing } = this.props;

  //   return (
  //     <ul className="todo-list">
  //       {
  //         todos.filter((todo) => {
  //           if (nowShowing === 'active') {
  //             return todo.isFinished === false;
  //           }

  //           if (nowShowing === 'completed') {
  //             return todo.isFinished === true;
  //           }
  //           return true;
  //         }).map((todo) => {
  //           return (
  //             <li 
  //               key = {todo.title}
  //               className="todo-item"
  //             >
  //               <input type="checkbox"
  //               checked={todo.isFinished}
  //               onChange={() => { this.toggleTodo(todo)}}
  //               />
  //               {todo.title}
  //               <button 
  //               onClick={() => { this.deleteTodo(todo)}}
  //               >
  //               Del
  //               </button>
  //             </li>
  //           );
  //         })
  //       }
  //     </ul>
  //   );
  // }

  render() {
    const { todos, nowShowing } = this.props;

    const _todos = todos.filter((todo) => {
      if (nowShowing === 'active') {
        return todo.isFinished === false;
      }

      if (nowShowing === 'completed') {
        return todo.isFinished === true;
      }
      return true;
    });

    console.log(_todos)
    return (
      <List
        items={_todos}
        itemRenderer={this.itemRenderer}
      />
    );
  }
}

export default TodoList;