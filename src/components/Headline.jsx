import { useEffect, useRef, useState } from 'react';

export default function Headline() {
  const text = 'Deploy Voice Agents That Book, Qualify & Convert';
  const [display, setDisplay] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 900; // ms

    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const chars = Math.floor(text.length * t);
      if (chars !== indexRef.current) {
        indexRef.current = chars;
        setDisplay(text.slice(0, chars));
      }
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, []);

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white/90">
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(90deg, var(--accent-strong, #7c66ff), #ffffff)',
        }}
      >
        {display || '\u200b'}
      </span>
    </h1>
  );
}
