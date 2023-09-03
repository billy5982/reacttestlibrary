import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// 초기 조건을 테스트  (버튼이 화면에 잘 나타나있는지)
test('button has correct initial color, and Updates when click', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  // expect the backgorund color to be red
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

  // click button(fireEvent) -> 버튼 클릭
  fireEvent.click(colorBtn);

  // 버튼이 레드가 되야함
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

  // 버튼 내의 텍스트도 변경되어야 함.
  expect(colorBtn).toHaveTextContent('Change to red');
});
