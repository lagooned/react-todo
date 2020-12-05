import { render, screen } from '@testing-library/react'
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

