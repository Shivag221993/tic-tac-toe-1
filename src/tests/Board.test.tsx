import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Board } from '../component/Board';
import { BoardState } from '../common/types';
import { SQUARE_LABEL_PREFIX } from '../constants';

describe('Board Component', () => {
  test('renders nine square buttons and highlights winning line', () => {
    const board: BoardState = ['X', 'O', 'X', null, 'O', null, null, null, 'X'];
    const handleSquareClick = vi.fn();

    render(
      <Board
        squares={board}
        onSquareClick={handleSquareClick}
        winningLine={[0, 2, 8]}
        isGameOver={false}
      />
    );

    const buttons = screen.getAllByRole('button', { name: /Square/i });
    expect(buttons).toHaveLength(9);
    expect(screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}0` })).toHaveClass('square-winning');
    expect(screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}2` })).toHaveClass('square-winning');
    expect(screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}8` })).toHaveClass('square-winning');
    expect(screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}1` })).not.toHaveClass('square-winning');

    fireEvent.click(screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}3` }));
    expect(handleSquareClick).toHaveBeenCalledWith(3);
  });

  test('renders an empty board without any winning highlights', () => {
    const board: BoardState = Array(9).fill(null);
    const handleSquareClick = vi.fn();

    render(<Board squares={board} onSquareClick={handleSquareClick} isGameOver={false} />);

    const buttons = screen.getAllByRole('button', { name: /Square/i });
    buttons.forEach((button) => expect(button).not.toHaveClass('square-winning'));

    fireEvent.click(screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}0` }));
    expect(handleSquareClick).toHaveBeenCalledWith(0);
  });

  test('renders squares without winning line and allows clicks when not game over', () => {
    const board: BoardState = [null, 'X', null, 'O', null, null, null, null, null];
    const handleSquareClick = vi.fn();

    render(<Board squares={board} onSquareClick={handleSquareClick} isGameOver={false} />);

    const buttonOne = screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}1` });
    expect(buttonOne).toBeDisabled();
    const buttonZero = screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}0` });
    expect(buttonZero).not.toBeDisabled();

    fireEvent.click(buttonZero);
    expect(handleSquareClick).toHaveBeenCalledWith(0);
  });

  test('disables all squares when game is over', () => {
    const board: BoardState = [null, null, null, null, null, null, null, null, null];
    const handleSquareClick = vi.fn();

    render(<Board squares={board} onSquareClick={handleSquareClick} isGameOver={true} />);

    const firstButton = screen.getByRole('button', { name: `${SQUARE_LABEL_PREFIX}0` });
    expect(firstButton).toBeDisabled();
    fireEvent.click(firstButton);
    expect(handleSquareClick).not.toHaveBeenCalled();
  });
});