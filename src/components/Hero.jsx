import { useEffect } from 'react';
import Headline from './Headline';
import Subheadline from './Subheadline';
import BookCall_CTA from './BookCall_CTA';

export default function Hero() {
  useEffect(() => {
    // Accent gradient animation + cursor parallax + scroll reactive stop shift
    const root = document.documentElement;
    let rafId = 0;

    function onMove(e) {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX / w - 0.5) * 10; // small translate
        const y = (e.clientY / h - 0.5) * 10;
        root.style.setProperty('--accent-translate-x', `${x}px`);
        root.style.setProperty('--accent-translate-y', `${y}px`);
      });
    }

    function onScroll() {
      const maxShift = 30; // 0% -> 30%
      const scrollY = window.scrollY;
      const docH = document.body.scrollHeight - window.innerHeight || 1;
      const t = Math.min(1, Math.max(0, scrollY / docH));
      root.style.setProperty('--accent-shift', `${Math.round(t * maxShift)}%`);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function playDemo() {
    const audio = new Audio(
      'data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAA...'
    );
    audio.play().catch(() => {});
  }

  return (
    <section
      className="min-h-screen w-full bg-[#07080a] text-white relative overflow-hidden"
      style={{
        // Mobile fallback: static premium violet
        backgroundImage:
          'radial-gradient(1200px 800px at calc(50% + var(--accent-translate-x, 0)) calc(30% + var(--accent-translate-y, 0)), color-mix(in oklab, #7c66ff 80%, white 10%) 0%, transparent 60%)',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at calc(50% + var(--accent-translate-x, 0)) calc(30% + var(--accent-translate-y, 0)), var(--accent, #00d4ff) var(--accent-shift, 0%), #7c66ff 50%, #ffd166 70%, transparent 75%)',
          filter: 'blur(60px)',
          opacity: 0.35,
          transform: 'translateZ(0)',
          transition: 'background-position 0.2s linear',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="text-sm tracking-wide text-white/70">AI Voice Agents • 24/7 Conversions</div>
            <Headline />
            <Subheadline />

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <BookCall_CTA />
              <button
                onClick={playDemo}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white/90 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition"
              >
                Listen Demo
              </button>
            </div>

            <p className="text-xs text-white/40 pt-2">Calendly microcopy suggestion: “Please briefly describe your business & main goal for the call.”</p>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative rounded-[2rem] border border-white/15 overflow-hidden bg-white/5 backdrop-blur-md shadow-2xl">
              <div className="absolute inset-0">
                {/* Device chrome top notch hint */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-3 h-6 w-40 rounded-full bg-white/10" />
              </div>
              <div className="relative">
                {/* Spline scene as the animated voice aura */}
                <div className="w-full h-[60vh] lg:h-[80vh]">
                  <div className="w-full h-full">
                    {/* Spline component lives inside DeviceWave */}
                    {/* Using DeviceWave for wave loop caption */}
                    <DeviceWaveWrapper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeviceWaveWrapper() {
  // Separate to avoid circular import
  const DeviceWave = require('./DeviceWave').default;
  return <DeviceWave />;
}
