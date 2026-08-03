import { useState } from 'react';
import { calculateWinner, isBoardFull } from '../common/gameLogic';
import { BoardState, Player } from '../common/types';
import { PLAYER_X } from '../constants';

interface GameState {
  board: BoardState;
  currentPlayer: Player;
}

export interface UseTicTacToeReturn {
  board: BoardState;
  currentPlayer: Player;
  winner: Player | null;
  winningLine: number[];
  isDraw: boolean;
}

export function useTicTacToe(): UseTicTacToeReturn {
  const [gameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: PLAYER_X,
  });

  const { board, currentPlayer } = gameState;
  const winInfo = calculateWinner(board);
  const winner = winInfo ? winInfo.winner : null;
  const winningLine = winInfo ? winInfo.line : [];
  const isDraw = !winner && isBoardFull(board);

  return {
    board,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
  };
}