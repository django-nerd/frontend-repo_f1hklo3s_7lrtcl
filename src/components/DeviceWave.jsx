import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function DeviceWave() {
  const waveRef = useRef(null);

  useEffect(() => {
    const el = waveRef.current;
    if (!el) return;
    el.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.02)' },
        { transform: 'scale(1)' },
      ],
      { duration: 1200, iterations: Infinity, easing: 'ease-in-out' }
    );
  }, []);

  return (
    <div className="relative w-full h-[60vh] lg:h-[85vh]">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div ref={waveRef} className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md px-4 py-2 text-[#cfd8e3] text-sm">AI Voice demo — "Hello! This is AtomiseAI. How can I help you today?"</div>
    </div>
  );
}
