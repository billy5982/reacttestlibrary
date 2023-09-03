import { render, screen } from '@testing-library/react';
import App from './App';

// 초기 조건을 테스트  (버튼이 화면에 잘 나타나있는지)
test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  // expect the backgorund color to be red
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {});
