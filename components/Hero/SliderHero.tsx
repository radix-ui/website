import React from 'react';

export function SliderHero() {
  return (
    <div
      style={{
        height: '2px',
        backgroundColor: 'white',
        borderRadius: '9999px',
        flexShrink: 0,
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '50%',
          flexShrink: 0,
          width: '16px',
          height: '16px',
          marginTop: -7,
        }}
      ></div>
    </div>
  );
}
