
import { test, expect, jest } from '@jest/globals'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import todoData from './todoData'

test('app renders', () => {
  render(<App />);
});

test('app has list items', () => {
  render(<App />)
  const todoItems = screen.getAllByRole('checkbox')
  expect(todoItems.length).toBeGreaterThan(0);
});

test('app has all items from json', () => {
  render(<App />)
  todoData.forEach(t => {
    expect(screen.getByText(t.text)).toBeInTheDocument()
  })
});

test('click toggles checkbox', () => {
  render(<App />)
  screen.getAllByRole('checkbox').forEach(async checkbox => {
    const state = checkbox.checked
    fireEvent.click(checkbox)
    await waitFor(() => expect(checkbox.checked).toEqual(!state))
  })
});

