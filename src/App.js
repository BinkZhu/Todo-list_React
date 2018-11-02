import React, { Component } from 'react';
import './App.css';

import Input from './Input';
import Filter from './Filter';
import List from './List';

class App extends Component {
  
  constructor(props) {
    super(props)

    //从浏览器缓存中读取已经存在的 todos
    const todos = JSON.parse(localStorage.getItem('todos'));

    // 初始化 todo app 的状态
    this.state = {
      todos: todos ||  [],
      nowShowing: 'all',
  };
  }

  //更新 todo
  handleAddTodo = (todo) => {
    console.log(todo)
    //取出已经添加的 todo
    const { todos } = this.state;
    
    //将用户输入的 todo 放到数组里
    todos.unshift(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

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

handleChangeShowing = (nowShowing) => {
  this.setState({nowShowing: nowShowing});
}

handleDeleteTodo = (todoToBeDelete) => {
  const { todos } = this.state;
  
  const _todos = todos.filter((todo) => {
    return todoToBeDelete.title !== todo.title;
  });
  
  this.setState({ todos: _todos });
  localStorage.setItem('todos', JSON.stringify(_todos));
}

  render() {
    //取出全部 todos， 传给 list
    const { todos, nowShowing } = this.state;

    return (
      <div className="todo">
        <Input 
        addTodo={this.handleAddTodo} 
        />

        <Filter
          todos = {todos}
          nowShowing={nowShowing}
          changeShowing={this.handleChangeShowing}
        />
          
        <List 
          nowShowing={nowShowing}
          todos={todos}
          updateTodo={this.handleUpdateTodo}
          deleteTodo={this.handleDeleteTodo}
        />
      </div>
    );
  }
}

export default App;
