
const TodoItem = (props) => (
  <label className="todo-item"><input type="checkbox" />{props.data.text}</label>
);

export default TodoItem
