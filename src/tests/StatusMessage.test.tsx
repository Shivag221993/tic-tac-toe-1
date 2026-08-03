import { render, screen } from '@testing-library/react';
import { StatusMessage } from '../component/StatusMessage';
import { PLAYER_X, PLAYER_O, STATUS_DATA_TESTID, STATUS_NEXT_PLAYER, STATUS_WINNER_PREFIX, STATUS_DRAW } from '../constants';

describe('StatusMessage Component', () => {
  test('shows next player when no winner and no draw', () => {
    render(<StatusMessage winner={null} isDraw={false} currentPlayer={PLAYER_X} />);
    expect(screen.getByTestId(STATUS_DATA_TESTID)).toHaveTextContent(`${STATUS_NEXT_PLAYER}${PLAYER_X}`);
  });

  test('shows winner message when winner exists', () => {
    render(<StatusMessage winner={PLAYER_O} isDraw={false} currentPlayer={PLAYER_X} />);
    expect(screen.getByTestId(STATUS_DATA_TESTID)).toHaveTextContent(`${STATUS_WINNER_PREFIX}${PLAYER_O}`);
  });

  test('shows draw message when game is a draw', () => {
    render(<StatusMessage winner={null} isDraw={true} currentPlayer={PLAYER_X} />);
    expect(screen.getByTestId(STATUS_DATA_TESTID)).toHaveTextContent(STATUS_DRAW);
  });

  test('shows winner message even when isDraw is true', () => {
    render(<StatusMessage winner={PLAYER_O} isDraw={true} currentPlayer={PLAYER_X} />);
    expect(screen.getByTestId(STATUS_DATA_TESTID)).toHaveTextContent(`${STATUS_WINNER_PREFIX}${PLAYER_O}`);
  });
});