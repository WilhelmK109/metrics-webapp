import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CryptoDetails = () => (
  <div>
    <h1>Crypto</h1>
  </div>
);

describe('Crypto', () => {
  test('render React component', () => {
    render(<CryptoDetails />);
    expect(screen.getByText('Crypto')).toBeInTheDocument();
  });
});
