import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';
test('11', () => {
  const wrapper = render(<Button>nice</Button>);
  const element = wrapper.queryByText('nice');
  expect(element).toBeTruthy();
});
