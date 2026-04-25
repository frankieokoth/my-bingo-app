interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div
        className="cyber-glow rounded-xl p-8 max-w-xs w-full text-center"
        style={{
          background: 'linear-gradient(135deg, #0f1021 60%, #1a1b2e 100%)',
          animation: 'cyber-modal-enter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div className="text-6xl mb-4" style={{ filter: 'drop-shadow(0 0 16px #ff00ea)' }}>🎉</div>
        <h2
          className="text-4xl font-extrabold mb-2 tracking-widest"
          style={{
            fontFamily: 'var(--font-cyber)',
            color: 'var(--color-bingo)',
            textShadow: '0 0 24px var(--color-bingo), 0 0 48px var(--color-glow-alt)',
          }}
        >
          BINGO!
        </h2>
        <p className="text-cyan-300 mb-6 text-lg" style={{ textShadow: '0 0 8px var(--color-glow)' }}>
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full cyber-btn py-3 px-6 text-lg"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
