import React from 'react';
import '../styles/swap.css';

function Swap({ swapHandler }) {
  return (
    <div className="swap-container" onClick={swapHandler}>
      <h4 style={{ fontFamily: 'sans-serif' }}>SWAP</h4>
    </div>
  );
}

export default Swap;
