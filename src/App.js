import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';
import Button from './component/Button';
import Input from './component/Input';

// class component
// stateful component
class App extends React.Component {
  state = {
    todoItems: [],
    inputValue: '',
  };

  addTodoHandler = () => {
    const { todoItems, inputValue } = this.state;
    const newArray = todoItems;
    newArray.push(inputValue);
    this.setState({ todoItems: newArray });
  };

  inputOnChangeHandler = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { todoItems } = this.state;

    return (
      <div>
        <div className="todo-form">
          <h1 className="todo-header">ToDo App</h1>
          <Input type="text" placeholder="Input your todo" onChangeHandler={this.inputOnChangeHandler} />

          <Button title="Add" todoHandler={this.addTodoHandler} />

          <TodoList todoArray={todoItems} />
        </div>
      </div>
    );
  }
}

export default App;
