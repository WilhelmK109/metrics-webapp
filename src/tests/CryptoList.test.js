import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CryptoList = () => (
  <div>
    <h1>Crypto</h1>
  </div>
);

describe('Crypto', () => {
  test('render React component', () => {
    render(<CryptoList />);
    expect(screen.getByText('Crypto')).toBeInTheDocument();
  });
});
