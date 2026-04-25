interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-[var(--color-bg)]">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-extrabold mb-2" style={{fontFamily:'var(--font-cyber)', color:'var(--color-accent-light)', textShadow:'0 0 16px var(--color-glow-alt)'}}>Bingo Mixer</h1>
        <p className="text-xl text-cyan-300 mb-8" style={{textShadow:'0 0 8px var(--color-glow)'}}>Find your people!</p>
        
        <div className="cyber-glow rounded-lg p-6 mb-8">
          <h2 className="font-semibold mb-3" style={{color:'var(--color-accent)', fontFamily:'var(--font-cyber)'}}>How to play</h2>
          <ul className="text-left text-cyan-200 text-base space-y-2" style={{textShadow:'0 0 4px var(--color-glow)'}}>
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full cyber-btn py-4 px-8 text-lg"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
