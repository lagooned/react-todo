
import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'

test('todo renders', () => {
  render(<TodoItem />)
});

test('todo renders with text', () => {
  render(<TodoItem text="test_text" />)
  const todoItemWithSpecificText = screen.getByText('test_text')
  expect(todoItemWithSpecificText).toBeInTheDocument()
});
