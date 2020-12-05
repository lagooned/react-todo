
import './App.css'
import TodoItem from './TodoItem'
import todoData from './todoData'

const App = () => (
  <div className="todo-items">
    {todoData.map(t => <TodoItem key={t.key} data={t} />)}
  </div>
);

export default App;
