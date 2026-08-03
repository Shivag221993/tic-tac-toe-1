import { BoardState } from '../common/types';
import { Square } from './Square';
import './component.css';

export interface BoardProps {
  squares: BoardState;
  onSquareClick: (index: number) => void;
  winningLine?: number[];
  isGameOver?: boolean;
}

export function Board({
  squares,
  onSquareClick,
  winningLine = [],
  isGameOver = false,
}: BoardProps) {
  return (
    <div className="board-grid">
      {squares.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinningSquare={winningLine.includes(index)}
          disabled={isGameOver}
        />
      ))}
    </div>
  );
}