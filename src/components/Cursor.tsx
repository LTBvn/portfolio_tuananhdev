import { useEffect, useState } from 'react';

const selectors = ['a', 'button', '.magnetic-btn'];

function Cursor() {
  const [cursorStyles, setCursorStyles] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setCursorStyles((state) => ({ ...state, x: event.clientX, y: event.clientY }));
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    const hoverHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const matches = selectors.some((selector) => target.closest(selector));
      setCursorStyles((state) => ({ ...state, active: matches }));
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', hoverHandler);
    document.addEventListener('mouseout', hoverHandler);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', hoverHandler);
      document.removeEventListener('mouseout', hoverHandler);
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${cursorStyles.active ? 'active' : ''}`}
      style={{ left: cursorStyles.x, top: cursorStyles.y }}
    />
  );
}

export default Cursor;
