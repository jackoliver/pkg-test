import { render } from '@testing-library/react';

import MuiTest from './MuiTest';

describe('MuiTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiTest />);
    expect(baseElement).toBeTruthy();
  });
});
