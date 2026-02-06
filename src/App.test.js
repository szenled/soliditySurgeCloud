// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders soliditySurge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/soliditySurge/i);
    expect(titleElement).toBeInTheDocument();
});
