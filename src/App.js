import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        content: 'Make react project'
      },
      {
        id: 2,
        content: 'Netflix and chill'
      },
      {
        id: 3,
        content: 'Eat lots of cheese'
      },
      {
        id: 4,
        content: 'Not go out!'
      }
    ]
  }
  deleteTodo = (id) => {
    console.log(id)
    const todos = this.state.todos.filter(todo => {
      return (todo.id !== id)
    })
    this.setState({todos})
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }

  render () {
    return (
      <div className="todo-app container">
        <h1 className="blue-text center">Quarantine Schedule!</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
