import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ResetButton } from '../component/ResetButton';
import { RESET_LABEL } from '../constants';

describe('ResetButton Component', () => {
  test('renders reset button with default label and triggers onReset', () => {
    const handleReset = vi.fn();
    render(<ResetButton onReset={handleReset} />);

    const button = screen.getByRole('button', { name: new RegExp(RESET_LABEL, 'i') });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleReset).toHaveBeenCalledTimes(1);
  });

  test('renders the default label text directly', () => {
    const handleReset = vi.fn();
    render(<ResetButton onReset={handleReset} />);

    expect(screen.getByText(RESET_LABEL)).toBeInTheDocument();
  });

  test('does not call onReset before user interaction', () => {
    const handleReset = vi.fn();
    render(<ResetButton onReset={handleReset} />);

    expect(handleReset).not.toHaveBeenCalled();
  });

  test('renders custom label when provided', () => {
    const handleReset = vi.fn();
    render(<ResetButton onReset={handleReset} label="Start Over" />);

    expect(screen.getByRole('button', { name: /Start Over/i })).toBeInTheDocument();
  });
});