import { render, screen, fireEvent } from '@testing-library/react';
import TicTacToe from '../component/TicTacToe';
import {
  RESET_LABEL,
  STATUS_DATA_TESTID,
  STATUS_NEXT_PLAYER,
  PLAYER_X,
} from '../constants';

describe('TicTacToe Integration', () => {
  test('renders initial state with empty board and status message', () => {
    render(<TicTacToe />);
    expect(screen.getByTestId(STATUS_DATA_TESTID)).toHaveTextContent(`${STATUS_NEXT_PLAYER}${PLAYER_X}`);
    expect(screen.getAllByRole('button', { name: /square/i })).toHaveLength(9);
  });

  test('resets game state through ResetButton', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button', { name: /square/i });

    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent(PLAYER_X);

    fireEvent.click(screen.getByRole('button', { name: new RegExp(RESET_LABEL, 'i') }));
    expect(squares[0]).toHaveTextContent('');
    expect(screen.getByTestId(STATUS_DATA_TESTID)).toHaveTextContent(`${STATUS_NEXT_PLAYER}${PLAYER_X}`);
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
    expect(screen.getByTestId(STATUS_DATA_TESTID)).toHaveTextContent(`${STATUS_NEXT_PLAYER}${PLAYER_X}`);
    expect(screen.getAllByRole('button', { name: /square/i })).toHaveLength(9);
  });
});