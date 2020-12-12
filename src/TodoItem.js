
import React, { Component } from 'react'

class TodoItem extends Component {

    constructor() {
        super()
        this.state = {
            completed: false
        }
    }

    onCompletedChange() {
        console.log('this.state.completed => #{this.state.completed}')
    }

    render() {
        return <label className="todo-item">
            <input
                type="checkbox"
                checked={this.state.completed}
                onChange={this.props.onCompletedChange || this.onCompletedChange}
            />
            {this.props.data.text}
        </label>
    }

}

export default TodoItem
