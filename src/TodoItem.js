
import React, { Component } from 'react'

class TodoItem extends Component {

    constructor() {
        super()
        this.state = {
            completed: false
        }
    }

    render() {
        return <label className="todo-item">
            <input type="checkbox" checked={this.state.completed}/>{this.props.data.text}
        </label>
    }

}

export default TodoItem
