import { http, HttpResponse } from 'msw';

import App from '@/App';
import { render, screen, userEvent } from '@/utils/test-utils';

import { server } from './mocks/server';

describe('App', () => {
  it('Checking App is available', () => {
    render(<App />);
    const text = screen.getByText('Apply Jest');
    expect(text).toBeInTheDocument();
  });

  it('increment button', async () => {
    render(<App />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText('count is 1')).toBeInTheDocument();
  });

  it('api success on load', async () => {
    render(<App />);
    expect(await screen.findByText('Todo List : 1')).toBeInTheDocument();
  });

  it('api error on load', () => {
    render(<App />);
    server.use(
      http.get('https://dummyjson.com/todos', () => {
        return new HttpResponse(null, { status: 401 });
      }),
    );
    expect(screen.queryByText('Todo List')).not.toBeInTheDocument();
  });
});
