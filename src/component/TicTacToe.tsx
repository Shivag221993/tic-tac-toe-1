import { useTicTacToe } from '../hooks/useTicTacToe';
import { Board } from './Board';
import { StatusMessage } from './StatusMessage';
import { ResetButton } from './ResetButton';
import { BOARD_TITLE } from '../constants';
import './component.css';

export default function TicTacToe() {
  const {
    board,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
    handleSquareClick,
    handleReset,
  } = useTicTacToe();

  return (
    <div className="tic-tac-toe">
      <h2>{BOARD_TITLE}</h2>
      <StatusMessage winner={winner} isDraw={isDraw} currentPlayer={currentPlayer} />
      <Board
        squares={board}
        onSquareClick={handleSquareClick}
        winningLine={winningLine}
        isGameOver={Boolean(winner) || isDraw}
      />
      <ResetButton onReset={handleReset} />
    </div>
  );
}