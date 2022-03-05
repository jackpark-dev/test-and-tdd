import React from 'react';
import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

test('renders learn react link', () => {
  const items = [
    {
      name: 'jack',
      href: '/test',
    },
  ];
  render(<SideBar items={items} />);
  const anchorElement = screen.getAllByRole('navigation');
  expect(anchorElement[0]).toHaveTextContent(items[0].name);
  expect(anchorElement[0]).toHaveAttribute('href', items[0].href);
});
