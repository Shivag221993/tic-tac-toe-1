import { BoardState, WinResult } from './types';

export const WINNING_COMBINATIONS: ReadonlyArray<[number, number, number]> = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

export function calculateWinner(squares: BoardState): WinResult | null {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = WINNING_COMBINATIONS[i];
    const first = squares[a];
    if (first && first === squares[b] && first === squares[c]) {
      return { winner: first, line: [a, b, c] };
    }
  }
  return null;
}

export function isBoardFull(squares: BoardState): boolean {
  return squares.every((square) => square !== null);
}