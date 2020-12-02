import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders', () => {
  render(<App />);
});

test('app has list items', () => {
  render(<App />)
  const todoItems = screen.getAllByRole('checkbox')
  expect(todoItems.length).toBeGreaterThan(0);
});
