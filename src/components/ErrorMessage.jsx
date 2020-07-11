import React, { useState, useEffect } from 'react';

export default () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowErrorMessage(true), 3000);

    return () => clearTimeout(timeout);
  }, []);

  return showErrorMessage ? (
    <div
      style={{
        margin: 'auto',
        padding: '200px 20px 0px',
        textAlign: 'center',
      }}
    >
      <h1>Oh boy, looks like you broke something 🌦</h1>

      <p style={{ color: '#ffffff', lineHeight: '32px' }}>
        Just kidding, it's probably my fault. I would very much appreciate it if
        you would kindly send an{' '}
        <a href='mailto:mmqn.michael@gmail.com' style={{ color: '#e4c200' }}>
          email
        </a>{' '}
        to inform me about this!
      </p>
    </div>
  ) : (
    <div
      style={{
        position: 'fixed',
        top: '50vh',
        left: 'calc(50vw - 94px)',
      }}
    >
      <h1>Loading 🌦</h1>
    </div>
  );
};
