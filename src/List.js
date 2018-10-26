import React, { Component } from 'react';

class List extends Component {

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

  render() {
    const { todos } = this.props;

    return (
      <ul className="todo-list">
        {
          todos.map((todo) => {
            return (
              <li 
                key = {todo.title}
                className="todo-item"
              >
                <input type="checkbox"
                checked={todo.isFinished}
                onChange={() => { this.toggleTodo(todo)}}
                />
                {todo.title}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default List;