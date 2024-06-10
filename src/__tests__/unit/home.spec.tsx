import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<Home />);

    const heading = screen.getByText('Phoenix 2009', {
      selector: 'h1',
    });

    expect(heading).toBeInTheDocument();
  });
});
