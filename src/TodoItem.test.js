
import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from './TodoItem'

test('todo renders', () => {
  render(<TodoItem data={{text: "TEST_TEXT"}} />)
});

test('todo renders with text', () => {
  render(<TodoItem data={{text: "TEST_TEXT"}} />)
  const todoItemWithSpecificText = screen.getByText("TEST_TEXT")
  expect(todoItemWithSpecificText).toBeInTheDocument()
});

test('todo calls onCompletedChange onChange', () => {
  const onChange = jest.fn()
  render(<TodoItem data={{text: "TEST_TEXT"}} onCompletedChange={onChange}/>)
  const todoItemCheckbox = screen.getByRole('checkbox')
  fireEvent.click(todoItemCheckbox)
  expect(onChange).toHaveBeenCalledTimes(1)
})
