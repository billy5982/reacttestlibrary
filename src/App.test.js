import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Learn React');
  // 단언 : 테스트의 성공과 실패를 반환 expect
  // matcher : toBeInTheDocument
  expect(linkElement).toBeInTheDocument();
});
