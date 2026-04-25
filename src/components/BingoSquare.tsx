import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'cyber-square relative flex items-center justify-center p-1.5 text-center select-none leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'winning'
      : ''
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto leading-snug">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span
          className="absolute top-0.5 right-1 font-bold"
          style={{ color: 'var(--color-marked)', textShadow: '0 0 10px var(--color-marked)', fontSize: '0.7rem' }}
        >
          ✓
        </span>
      )}
    </button>
  );
}
