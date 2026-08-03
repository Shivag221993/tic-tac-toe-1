import { useTicTacToe } from '../hooks/useTicTacToe';
import { ResetButton } from './ResetButton';
import { BOARD_TITLE } from '../constants';
import './component.css';

export default function TicTacToe() {
  const {
    handleReset,
  } = useTicTacToe();

  return (
    <div className="tic-tac-toe">
      <h2>{BOARD_TITLE}</h2>
      <ResetButton onReset={handleReset} />
    </div>
  );
}