
import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'

test('todo renders', () => {
  render(<TodoItem data={{text: "TEST_TEXT"}} />)
});

test('todo renders with text', () => {
  render(<TodoItem data={{text: "TEST_TEXT"}} />)
  const todoItemWithSpecificText = screen.getByText("TEST_TEXT")
  expect(todoItemWithSpecificText).toBeInTheDocument()
});
