import { useState, useEffect } from 'react';

export default () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWidthUpdates = e => {
    const { innerWidth } = e.target;
    setWindowWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWidthUpdates);

    return window.removeEventListener('resize', handleWidthUpdates);
  });

  return windowWidth;
};
