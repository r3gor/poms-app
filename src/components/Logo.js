import React from "react";

export const Logo = () => {
  return (
    <div
      style={{
        height: '150px',
        padding: 10,
      }}
    >
      <img
        alt="logo"
        src="https://www.pngrepo.com/png/52746/512/tomato.png"
        width="85%"
        style={{
          display: 'block',
          margin: 'auto',
          position: 'relative',
        }}
      />
      <h3
      style={{
        fontWeight: 'normal',
        color: 'white',
        position: 'relative',
        top: '-80px',
        textAlign: 'center',
        textShadow: '2px 2px 5px tomato'
      }}
      >
        Poms App
      </h3>
    </div>
  );
};
