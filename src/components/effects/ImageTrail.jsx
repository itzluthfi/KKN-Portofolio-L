import { useEffect, useRef } from 'react';

const ImageTrail = ({ images = [] }) => {
  const ref = useRef(null);
  const last = useRef({ x: 0, y: 0, time: 0, index: 0 });

  useEffect(() => {
    const host = ref.current;
    if (!host || images.length === 0) return undefined;

    const spawn = event => {
      const now = performance.now();
      const dx = event.clientX - last.current.x;
      const dy = event.clientY - last.current.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 86 || now - last.current.time < 90) return;

      last.current = {
        x: event.clientX,
        y: event.clientY,
        time: now,
        index: (last.current.index + 1) % images.length,
      };

      const image = document.createElement('img');
      image.src = images[last.current.index];
      image.alt = '';
      image.className = 'image-trail-item';
      image.style.left = `${event.clientX}px`;
      image.style.top = `${event.clientY}px`;
      image.style.setProperty('--r', `${Math.max(-12, Math.min(12, dx * 0.08))}deg`);
      host.appendChild(image);

      window.setTimeout(() => image.remove(), 900);
    };

    window.addEventListener('pointermove', spawn);
    return () => window.removeEventListener('pointermove', spawn);
  }, [images]);

  return <div ref={ref} className="image-trail" aria-hidden="true" />;
};

export default ImageTrail;
