import { useState } from 'react';
import { calculateWinner, isBoardFull } from '../common/gameLogic';
import { BoardState, Player } from '../common/types';
import { PLAYER_X, PLAYER_O } from '../constants';

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
  handleSquareClick: (index: number) => void;
  handleReset: () => void;
}

export function useTicTacToe(): UseTicTacToeReturn {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: PLAYER_X,
  });

  const { board, currentPlayer } = gameState;
  const winInfo = calculateWinner(board);
  const winner = winInfo ? winInfo.winner : null;
  const winningLine = winInfo ? winInfo.line : [];
  const isDraw = !winner && isBoardFull(board);

  const handleSquareClick = (index: number): void => {
    if (winner) return;
    if (board[index]) return;

    setGameState((prevGameState) => {
      const { board: prevBoard, currentPlayer: prevCurrent } = prevGameState;
      const nextBoard: BoardState = [...prevBoard];
      nextBoard[index] = prevCurrent;
      const nextPlayer = prevCurrent === PLAYER_X ? PLAYER_O : PLAYER_X;

      return {
        board: nextBoard,
        currentPlayer: nextPlayer,
      };
    });
  };

  const handleReset = (): void => {
    setGameState({
      board: Array(9).fill(null),
      currentPlayer: PLAYER_X,
    });
  };

  return {
    board,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
    handleSquareClick,
    handleReset,
  };
}