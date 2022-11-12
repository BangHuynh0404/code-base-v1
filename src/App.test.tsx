import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('Renders App', () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    expect(screen.getByRole('heading')).toHaveTextContent('app');
  });
});
