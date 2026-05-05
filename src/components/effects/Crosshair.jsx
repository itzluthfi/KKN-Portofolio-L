import { useEffect, useRef } from 'react';

const Crosshair = () => {
  const ref = useRef(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return undefined;

    let frame = 0;
    const move = event => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        target.style.setProperty('--x', `${event.clientX}px`);
        target.style.setProperty('--y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', move);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return (
    <div ref={ref} className="crosshair" aria-hidden="true">
      <span className="crosshair-line crosshair-x" />
      <span className="crosshair-line crosshair-y" />
      <span className="crosshair-core" />
    </div>
  );
};

export default Crosshair;
