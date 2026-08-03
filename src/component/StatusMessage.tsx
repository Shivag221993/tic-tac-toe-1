import { Player } from '../common/types';
import {
  STATUS_DATA_TESTID,
  STATUS_NEXT_PLAYER,
  STATUS_WINNER_PREFIX,
  STATUS_DRAW,
} from '../constants';
import './component.css';

export interface StatusMessageProps {
  winner: Player | null;
  isDraw: boolean;
  currentPlayer: Player;
}

export function StatusMessage({
  winner,
  isDraw,
  currentPlayer,
}: StatusMessageProps) {
  const getStatusText = () => {
    if (winner) {
      return `${STATUS_WINNER_PREFIX}${winner}`;
    }
    if (isDraw) {
      return STATUS_DRAW;
    }
    return `${STATUS_NEXT_PLAYER}${currentPlayer}`;
  };

  return (
    <div data-testid={STATUS_DATA_TESTID} className="status-message">
      {getStatusText()}
    </div>
  );
}