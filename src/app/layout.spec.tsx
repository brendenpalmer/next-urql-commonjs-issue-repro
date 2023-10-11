import { render } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('renders the layout correctly', () => {
    const { container } = render(<RootLayout>Test</RootLayout>);
    expect(container).toMatchInlineSnapshot();
  });
});
