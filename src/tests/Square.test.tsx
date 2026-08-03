import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Square } from '../component/Square';
import { PLAYER_O, SQUARE_LABEL_PREFIX } from '../constants';

describe('Square Component', () => {
  test('renders empty square and triggers onClick on user click', () => {
    const handleClick = vi.fn();
    render(<Square value={null} onClick={handleClick} index={0} />);

    const button = screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}0` });
    expect(button).toHaveTextContent('');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders O value and is disabled when value is already set', () => {
    const handleClick = vi.fn();
    render(<Square value={PLAYER_O} onClick={handleClick} index={1} />);

    const button = screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}1` });
    expect(button).toHaveTextContent(PLAYER_O);
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies winning class when isWinningSquare is true', () => {
    const handleClick = vi.fn();
    render(
      <Square value={null} onClick={handleClick} index={2} isWinningSquare />
    );

    const button = screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}2` });
    expect(button).toHaveClass('square-winning');
  });

  test('disables an empty square and prevents click events when disabled prop is true', () => {
    const handleClick = vi.fn();
    render(
      <Square value={null} onClick={handleClick} index={3} disabled />
    );

    const button = screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}3` });
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});