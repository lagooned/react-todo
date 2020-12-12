
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

test('todo has default state false', () => {
  render(<TodoItem data={{text: "TEST_TEXT"}} />)
  const todoItemCheckbox = screen.getByRole('checkbox')
  expect(todoItemCheckbox.checked).toEqual(false)
})

test('todo has state from prop', () => {
  render(<TodoItem data={{text: "TEST_TEXT", completed: true}} />)
  const todoItemCheckbox = screen.getByRole('checkbox')
  expect(todoItemCheckbox.checked).toEqual(true)
})

test('todo negates completed state', () => {
  render(<TodoItem data={{text: "TEST_TEXT"}} />)
  const todoItemCheckbox = screen.getByRole('checkbox')
  expect(todoItemCheckbox.checked).toEqual(false)
  fireEvent.click(todoItemCheckbox)
  expect(todoItemCheckbox.checked).toEqual(true)
})
