import { useEffect, useRef, useState } from 'react';

export default function Subheadline() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <p
      ref={ref}
      className={`max-w-2xl text-base sm:text-lg text-[#cfd8e3] transition-opacity duration-600 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      Human-sounding voice agents that answer calls, qualify leads and schedule meetings — integrated with your CRM.
    </p>
  );
}
