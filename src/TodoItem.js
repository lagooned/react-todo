
import React, { Component } from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            completed: this.props.data.completed || false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        if (this.props.handleChange) {
            this.props.handleChange(this.props.data.id)
            return
        }
        this.setState(prevState => {
            return {completed: !prevState.completed}
        })
    }

    render() {
        return <label className="todo-item">
            <input
                type="checkbox"
                checked={this.state.completed}
                onChange={() => this.handleChange(this.props.data.id)} />
            {this.props.data.text}
        </label>
    }

}

export default TodoItem
