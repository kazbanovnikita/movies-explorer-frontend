import { useEffect, useState } from 'react';


export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeout = null;
    const resizeListener = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setWidth(window.innerWidth), 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  let settings;

  if (320 <= width) {
    settings = {
        initialCardsNumber: 5,
        cardsPerLine: 2,
      };
  }

  if (768 <= width) {
    settings = {
        initialCardsNumber: 8,
        cardsPerLine: 2,
      };
  }

  if (1280 <= width) {
    settings = {
        initialCardsNumber: 12,
        cardsPerLine: 3,
      };
  }

  return settings;
}