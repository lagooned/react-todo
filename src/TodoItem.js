
import React, { Component } from 'react'

class TodoItem extends Component {

    constructor() {
        super()
    }

    render() {
        return <label className="todo-item"><input type="checkbox" />{this.props.data.text}</label>
    }

}

export default TodoItem
