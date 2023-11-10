import axios from 'axios';
import { useEffect, useState } from 'react';

export const useCurrencyInfo = currency => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
      .then(data => setData(data.data[currency]))
      .catch(err => {
        console.log(err);
      });
  }, [currency]);
  return data;
};
