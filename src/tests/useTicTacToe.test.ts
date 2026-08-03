import { renderHook, act } from '@testing-library/react';
import { useTicTacToe } from '../hooks/useTicTacToe';
import { PLAYER_X, PLAYER_O } from '../constants';

describe('useTicTacToe Custom Hook', () => {
  test('initializes with clean board and X as first player', () => {
    const { result } = renderHook(() => useTicTacToe());
    expect(result.current.board).toEqual(Array(9).fill(null));
    expect(result.current.currentPlayer).toBe(PLAYER_X);
    expect(result.current.winner).toBeNull();
    expect(result.current.isDraw).toBe(false);
  });

  test('handles square click, updates board, and alternates turn', () => {
    const { result } = renderHook(() => useTicTacToe());

    act(() => {
      result.current.handleSquareClick(0);
    });

    expect(result.current.board[0]).toBe(PLAYER_X);
    expect(result.current.currentPlayer).toBe(PLAYER_O);
  });

  test('does not update an occupied square', () => {
    const { result } = renderHook(() => useTicTacToe());

    act(() => {
      result.current.handleSquareClick(0);
    });

    act(() => {
      result.current.handleSquareClick(0);
    });

    expect(result.current.board[0]).toBe(PLAYER_X);
    expect(result.current.board.filter((item) => item !== null)).toHaveLength(1);
  });

  test('detects draw condition when board is full without a winner', () => {
    const { result } = renderHook(() => useTicTacToe());

    act(() => {
      result.current.handleSquareClick(0);
      result.current.handleSquareClick(1);
      result.current.handleSquareClick(2);
      result.current.handleSquareClick(4);
      result.current.handleSquareClick(3);
      result.current.handleSquareClick(5);
      result.current.handleSquareClick(7);
      result.current.handleSquareClick(6);
      result.current.handleSquareClick(8);
    });

    expect(result.current.winner).toBeNull();
    expect(result.current.isDraw).toBe(true);
  });

  test('detects win condition and locks further moves', () => {
    const { result } = renderHook(() => useTicTacToe());

    act(() => {
      result.current.handleSquareClick(0);
      result.current.handleSquareClick(3);
      result.current.handleSquareClick(1);
      result.current.handleSquareClick(4);
      result.current.handleSquareClick(2);
    });

    expect(result.current.winner).toBe(PLAYER_X);
    expect(result.current.winningLine).toEqual([0, 1, 2]);

    act(() => {
      result.current.handleSquareClick(5);
    });
    expect(result.current.board[5]).toBeNull();
    expect(result.current.currentPlayer).toBe(PLAYER_O);
  });

  test('resets state correctly', () => {
    const { result } = renderHook(() => useTicTacToe());

    act(() => {
      result.current.handleSquareClick(0);
      result.current.handleReset();
    });

    expect(result.current.board).toEqual(Array(9).fill(null));
    expect(result.current.currentPlayer).toBe(PLAYER_X);
    expect(result.current.winner).toBeNull();
  });

  test('reset after win restores starting player and clears winner', () => {
    const { result } = renderHook(() => useTicTacToe());

    act(() => {
      result.current.handleSquareClick(0);
      result.current.handleSquareClick(3);
      result.current.handleSquareClick(1);
      result.current.handleSquareClick(4);
      result.current.handleSquareClick(2);
      result.current.handleReset();
    });

    expect(result.current.winner).toBeNull();
    expect(result.current.currentPlayer).toBe(PLAYER_X);
    expect(result.current.isDraw).toBe(false);
  });
});