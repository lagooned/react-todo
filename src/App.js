
import React, { Component } from 'react'

import './App.css'
import TodoItem from './TodoItem'
import todoData from './todoData'

class App extends Component {

    constructor() {
        super()
        this.state = {
            todoData: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            return {
                todoData: prevState.todoData.map(t => {
                    if (t.id === id) return {...t, completed: !t.completed}
                    return t
                })
            }
        })
    }

    render() {
        return (
            <div className="todo-items"> { this.state.todoData.map(t =>
                <TodoItem
                    key={`${t.id} + ${t.name} + ${t.completed}`}
                    handleChange={this.handleChange}
                    data={t} />)
            } </div>
        )
    }

}

export default App;
