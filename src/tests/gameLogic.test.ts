import { calculateWinner } from '../common/gameLogic';
import { BoardState } from '../common/types';
import { PLAYER_X, PLAYER_O } from '../constants';

describe('Tic Tac Toe Pure Logic', () => {
  test('returns null for an empty board', () => {
    const board: BoardState = Array(9).fill(null);
    expect(calculateWinner(board)).toBeNull();
  });

  test('returns null when there is no winning line', () => {
    const board: BoardState = [PLAYER_X, PLAYER_O, PLAYER_X, PLAYER_X, PLAYER_O, PLAYER_O, PLAYER_O, PLAYER_X, null];
    expect(calculateWinner(board)).toBeNull();
  });

  test('detects a row win for X', () => {
    const board: BoardState = [PLAYER_X, PLAYER_X, PLAYER_X, null, PLAYER_O, null, PLAYER_O, null, null];
    expect(calculateWinner(board)).toEqual({ winner: PLAYER_X, line: [0, 1, 2] });
  });

  test('detects a diagonal win for O', () => {
    const board: BoardState = [PLAYER_O, PLAYER_X, PLAYER_X, null, PLAYER_O, null, PLAYER_X, null, PLAYER_O];
    expect(calculateWinner(board)).toEqual({ winner: PLAYER_O, line: [0, 4, 8] });
  });
});