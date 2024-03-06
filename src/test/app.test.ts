import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));
describe('App test', () => {
  test('is render count', () => {
    render(App());
    const countView = screen.getByText('현재 숫자: 0');
    const button = screen.getAllByRole('button');
    expect(countView).toBeInTheDocument();
    expect(button.length).toBe(2);
  });
});

// it('increment test', () => {
//   render(App());
//   const initialScreen = screen.getByText('현재 숫자: 0');
//   expect(initialScreen).toBeInTheDocument();

//   const incrementBtn = screen.getByTestId('test-incrementBtn');
//   fireEvent.click(incrementBtn);
//   const changedScreen = screen.getByAltText('현재 숫자: 1');
//   expect(changedScreen).toBeInTheDocument();
// });
