import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        todo: {
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({todo: {content: e.target.value}})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({todo: {content: ''}})
    }

    render () {
        return (
            <div className="addtodo-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Enter task todo</label>
                    <input type="text" value={this.state.todo.content} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo