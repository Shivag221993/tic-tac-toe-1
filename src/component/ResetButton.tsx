import { RESET_LABEL } from '../constants';
import './component.css';

export interface ResetButtonProps {
  onReset: () => void;
  label?: string;
}

export function ResetButton({ onReset, label = RESET_LABEL }: ResetButtonProps) {
  return (
    <button className="reset-button" onClick={onReset}>
      {label}
    </button>
  );
}