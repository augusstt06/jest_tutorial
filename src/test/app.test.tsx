import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App test', () => {
  test('jest title test', () => {
    render(App());
    const titleText = screen.getByTestId('title-text');
    expect(titleText).not.toBeNull();
  });
});
