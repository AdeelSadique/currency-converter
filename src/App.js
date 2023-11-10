import React, { useEffect, useState } from 'react';
import './styles/app.css';
import Card from './components/Card';
import Swap from './components/Swap';
import { useCurrencyInfo } from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [swapped, setSwapped] = useState(false);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyData = useCurrencyInfo(from);

  const swapTopMargin = {
    marginBottom: '-10px',
  };
  const swapDownMargin = {
    marginTop: '-10px',
  };
  const swapHandler = () => {
    setSwapped(pre => (pre = !swapped));
    setFrom(pre => (pre = to));
    setTo(pre => (pre = from));
  };
  const converterHanlder = () => {
    setConvertedAmount(pre => (pre = amount * currencyData[to]));
  };

  return (
    <>
      <select>
        <option value="usd">usd</option>
        <option value="pkr">pkr</option>
        <option value="inr">inr</option>
      </select>
      <div className="container">
        <Card
          customCss={swapTopMargin}
          amount={!swapped ? amount : convertedAmount.toFixed(2)}
          label={'FROM'}
          setAmount={e => setAmount(prev => (prev = e.target.value))}
          setCurrency={e => setFrom(pre => (pre = e.target.value))}
          currency={!swapped ? from : to}
          currencyOptions={Object.keys(currencyData)}
        />
        <Swap swapHandler={swapHandler} />
        <Card
          customCss={swapDownMargin}
          label={'TO'}
          amount={!swapped ? convertedAmount.toFixed(2) : amount}
          setAmount={e => setAmount(prev => (prev = e.target.value))}
          currency={!swapped ? to : from}
          setCurrency={e => setTo(pre => (pre = e.target.value))}
          currencyOptions={Object.keys(currencyData)}
        />
        <button style={{ opacity: '0.9' }} onClick={converterHanlder}>
          <h4
            style={{
              color: 'white',
              fontFamily: 'sans-serif',
              border: 'none',
            }}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </h4>
        </button>
      </div>
    </>
  );
}

export default App;
