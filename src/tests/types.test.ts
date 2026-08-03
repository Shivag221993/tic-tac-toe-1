import { BoardState, Player, SquareValue, WinResult } from '../common/types';

describe('Common types', () => {
  test('Player type allows X or O', () => {
    const playerX: Player = 'X';
    const playerO: Player = 'O';

    expect(playerX).toBe('X');
    expect(playerO).toBe('O');
  });

  test('SquareValue can be a player or null', () => {
    const emptySquare: SquareValue = null;
    const filledSquare: SquareValue = 'O';

    expect(emptySquare).toBeNull();
    expect(filledSquare).toBe('O');
  });

  test('BoardState renders a nine-square board', () => {
    const board: BoardState = ['X', null, 'O', 'X', null, 'O', null, 'X', null];
    expect(board).toHaveLength(9);
    expect(board.filter((sq) => sq !== null)).toHaveLength(5);
  });

  test('WinResult shape is correct', () => {
    const win: WinResult = { winner: 'X', line: [0, 1, 2] };
    expect(win.winner).toBe('X');
    expect(win.line).toEqual([0, 1, 2]);
  });
});