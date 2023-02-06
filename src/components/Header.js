import React from 'react';

const Header = () => {
  // inline style using variable
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: '5rem',
          fontWeight: '500',
          marginBottom: '1rem',
          lineHeight: '1em',
          color: '#686767',
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      >
        todos
      </h1>
    </header>
  );
};

export default Header;
