import { useState, useEffect } from 'react';

export default () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWidthUpdates = e => setWindowWidth(e.target.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWidthUpdates);
  }, []);

  return windowWidth;
};
