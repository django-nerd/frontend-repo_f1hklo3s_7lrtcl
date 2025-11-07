import { useEffect, useRef } from 'react';

export default function BookCall_CTA({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'scale(0.95)';
    el.style.transition = 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 200ms ease';

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.transform = 'scale(1)';
        }
      });
    }, { threshold: 0.3 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href="https://calendly.com/your-page"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a call with AtomiseAI"
      className={`cta-book inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-[#07080a] bg-white/95 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60 shadow-[0_8px_30px_rgba(0,212,255,0.25)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.35)] transition will-change-transform ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      Book a Call
    </a>
  );
}
