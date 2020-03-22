import React from 'react'
import './App.css'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (todos.map(todo => {
        return (
            <div className="todo collection-item" key={todo.id}>
                <span onClick={()=>{deleteTodo(todo.id)}} className="todo-item center">{todo.content}</span>
            </div>
        )
    })) : 
    (<p className="center">You have no todos left! Yay!</p>)
    return (
        <div className="todo-list collection">
            {todoList}
        </div>
    )
} 

export default Todos