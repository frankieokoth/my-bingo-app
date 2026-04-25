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
    <div className="flex flex-col min-h-full bg-[var(--color-bg)]">
      {/* Header */}
      <header className="flex items-center justify-between p-3 cyber-glow mb-2">
        <button
          onClick={onReset}
          className="cyber-btn text-xs px-3 py-1.5"
        >
          ← Back
        </button>
        <h1 className="font-bold text-2xl tracking-widest" style={{fontFamily:'var(--font-cyber)', color:'var(--color-accent-light)', textShadow:'0 0 12px var(--color-glow-alt)'}}>Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-cyan-300 text-base py-2 px-4" style={{textShadow:'0 0 8px var(--color-glow)'}}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-center py-2 font-extrabold text-lg" style={{color:'var(--color-bingo)', textShadow:'0 0 16px var(--color-bingo)'}}>
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
