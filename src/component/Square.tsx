import { SquareValue } from '../common/types';
import {
  SQUARE_LABEL_PREFIX,
} from '../constants';
import './component.css';

export interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  index: number;
  isWinningSquare?: boolean;
  disabled?: boolean;
}

export function Square({
  value,
  onClick,
  index,
  isWinningSquare = false,
  disabled = false,
}: SquareProps) {
  return (
    <button
      aria-label={`${SQUARE_LABEL_PREFIX}${index}`}
      className={`square-button ${isWinningSquare ? 'square-winning' : ''}`}
      onClick={onClick}
      disabled={disabled || Boolean(value)}
    >
      {value}
    </button>
  );
}