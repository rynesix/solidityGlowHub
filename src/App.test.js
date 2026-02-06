// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders solidityGlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/solidityGlow/i);
    expect(titleElement).toBeInTheDocument();
});
