import { renderHook } from '@testing-library/react';
import { useTicTacToe } from '../hooks/useTicTacToe';
import { PLAYER_X } from '../constants';

describe('useTicTacToe Custom Hook', () => {
  test('initializes with clean board and X as first player', () => {
    const { result } = renderHook(() => useTicTacToe());
    expect(result.current.board).toEqual(Array(9).fill(null));
    expect(result.current.currentPlayer).toBe(PLAYER_X);
    expect(result.current.winner).toBeNull();
    expect(result.current.isDraw).toBe(false);
  });
});