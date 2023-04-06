import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn Video Search', () => {
  render(<App />);
  const linkElement = screen.getByText(/Video Search/i);
  expect(linkElement).toBeInTheDocument();
});
