
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

    handleChange(event) {

    }

    getTodoItems() {
        return this.state.todoData.map(t => <TodoItem key={t.key} data={t} handleChange={this.handleChange}/>)
    }

    render() {
        return <div className="todo-items">
            {this.getTodoItems()}
        </div>
    }

}

export default App;
