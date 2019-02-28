import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Lunch at home',
        completed: false
      },
      {
        id: 3,
        title: 'Take kid to Taekwondo class',
        completed: false
      },
      {
        id: 4,
        title: 'Eat dinner',
        completed: false
      },
      {
        id: 5,
        title: 'Watch Doctor Who',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState=({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = true
        console.log(id)
      }
      return todo;
    }) });
  }

  render() {

    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
