
import React, { Component } from 'react'

import './App.css'
import TodoItem from './TodoItem'
import todoData from './todoData'

class App extends Component {

    todoItems() {
        return todoData.map(t => <TodoItem key={t.key} data={t} />)
    }

    render() {
        return <div className="todo-items">
            {this.todoItems()}
        </div>
    }

}

export default App;
