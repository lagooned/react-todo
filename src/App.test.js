import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders', () => {
  render(<App />);
});

test('app has 3 list items', () => {
  render(<App />)
  const todoItems = screen.getAllByLabelText('item')
  expect(todoItems).toHaveLength(3)
});
