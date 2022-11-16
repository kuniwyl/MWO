import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const container = document.querySelector('#counter');
  expect(container.innerText == 0);
});
