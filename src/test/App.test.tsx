import App from '@/App';
import { render, screen } from '@/utils/test-utils';

describe('App', () => {
  it('Checking App is available', () => {
    render(<App />);
    const text = screen.getByText('Apply Jest');
    expect(text).toBeInTheDocument();
  });
});
