import React, { Component } from 'react';
import './App.css';

import Input from './Input';
import List from './List';

class App extends Component {
  
  constructor(props) {
    super(props)

    //从浏览器缓存中读取已经存在的 todos
    const todos = JSON.parse(localStorage.getItem('todos'));

    // 初始化 todo app 的状态
    this.state = {
      todos: todos ||  [],
  };
  }

  //更新 todo
  handleAddTodo = (todo) => {
    console.log(todo)
    //取出已经添加的 todo
    const { todos } = this.state;
    todos.unshift(todo);

    //更新状态
    this.setState({ todos: todos });
  }

  // 更新 todo
  handleUpdateTodo = (todo) => {
    // 取出已经添加的 todo
    const { todos } = this.state;

    const _todos = todos.map((_todo) => {
      // 找到 todos 中相同 title 的todo
      if (todo.title === _todo.title) {
        // 用最新的  todo 替换，直接返回
        return todo;
    }

    return _todo;
  });

  localStorage.getItem('todos', JSON.stringify(todos));

  //更新状态
  this.setState({ todos: _todos });
}


  render() {
    //取出全部 todos， 传给 list
    const { todos } = this.state;

    return (
      <div className="todo">
        <Input 
        addTodo = {this.handleAddTodo} 
        />
          
        <List 
          todos={todos}
          updateTodo={this.handleUpdateTodo}
        />
      </div>
    );
  }
}

export default App;
