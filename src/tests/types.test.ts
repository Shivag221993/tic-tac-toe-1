import {  Player, SquareValue } from '../common/types';

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
});