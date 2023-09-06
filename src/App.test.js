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

test('initial conditions', () => {
  render(<App />);

  const coloerBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(coloerBtn).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked(); // .not 을 이ㅇㅏ여 반ㅐㅗ도 실ㅇㅏ능
});

test('체크박스 on-off에 따른 버튼 활성화 체크', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const colorBtn = screen.getByRole('button');

  // 초기에는 체크박스 비활성화 상태 -> 버튼은 활성화 되어야함
  expect(colorBtn).toBeEnabled();

  // 체크박스 활성화
  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();

  // 체크 박스 활성화 시 버튼이 회색이 되었으면 좋겠음. -> 활성한 후에는 원래 색깔이여야 함.
});

test('체크박스 활성화 시 버튼의 백그라운드가 회색으로 변경됩니다. 비활성화 시 기존 상태를 유지합니다', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  // 활성화 시 그레이
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });

  // 비활성화 시 원래 색(레드)
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

  // 버튼 -> 파랑색 -> 체크 그레이
  fireEvent.click(colorBtn);
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });

  // 버튼 -> 파랑색
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });
});
