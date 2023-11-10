import React, { useEffect } from 'react';

import '../styles/card.css';
function Card({
  label,
  amount,
  currency,
  setCurrency,
  setAmount,
  customCss,
  currencyOptions = [],
}) {
  useEffect(() => {}, [
    amount,
    currency,
    setCurrency,
    setAmount,
    currencyOptions,
  ]);
  return (
    <div className="card-container" style={customCss}>
      <div className="container-1">
        <h4 style={{ fontFamily: 'sans-serif' }}>{label}</h4>
        <input onChange={setAmount} type="number" value={amount} />
      </div>
      <div className="container-2">
        <h4 style={{ fontFamily: 'sans-serif' }}>Currency Type</h4>
        <select defaultValue={currency} onChange={setCurrency}>
          {currencyOptions.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Card;
