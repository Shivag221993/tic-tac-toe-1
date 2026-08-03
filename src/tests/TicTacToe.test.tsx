import { render, screen, fireEvent } from '@testing-library/react';
import TicTacToe from '../component/TicTacToe';
import {
  RESET_LABEL,
  PLAYER_X,
} from '../constants';

describe('TicTacToe Integration', () => {

  test('resets game state through ResetButton', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button', { name: /square/i });

    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent(PLAYER_X);

    fireEvent.click(screen.getByRole('button', { name: new RegExp(RESET_LABEL, 'i') }));
    expect(squares[0]).toHaveTextContent('');
  });

  test('resets board and status after a win', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button', { name: /square/i });

    fireEvent.click(squares[0]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[2]);

    fireEvent.click(screen.getByRole('button', { name: new RegExp(RESET_LABEL, 'i') }));
    expect(screen.getAllByRole('button', { name: /square/i })).toHaveLength(9);
  });
});