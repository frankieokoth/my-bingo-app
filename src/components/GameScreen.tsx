import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 cyber-glow">
        <button
          onClick={onReset}
          className="cyber-btn text-xs px-3 py-1.5 rounded-md"
        >
          ← Back
        </button>
        <h1
          className="neon-title font-bold text-xl sm:text-2xl tracking-widest"
          style={{ fontFamily: 'var(--font-cyber)', color: 'var(--color-accent-light)' }}
        >
          Bingo Mixer
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p
        className="text-center text-sm sm:text-base py-2 px-4"
        style={{ color: 'rgba(0,255,247,0.7)', textShadow: '0 0 6px var(--color-glow)' }}
      >
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div
          className="text-center py-2 font-extrabold text-lg tracking-wider"
          style={{ color: 'var(--color-bingo)', textShadow: '0 0 16px var(--color-bingo), 0 0 32px var(--color-glow-alt)' }}
        >
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center px-3 py-2">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
