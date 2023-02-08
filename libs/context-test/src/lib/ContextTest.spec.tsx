import { render } from '@testing-library/react';

import ContextTest from './ContextTest';

describe('ContextTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextTest />);
    expect(baseElement).toBeTruthy();
  });
});
