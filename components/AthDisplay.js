import React, { useState, useEffect } from "react";


const athDisplay = ({ currentPair, logo }) => {

  const mapPair = {
    'EUR/USDT': 'ethereum',
    'BTC/USDT': 'bitcoin'
  }

  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    const getCurrentPrice = async (token) => {
      const result = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`
      );
      const response = await result.json();

      const price = response[token].usd;
      setCurrentPrice(price);
    };

    getCurrentPrice(mapPair[currentPair.symbol]);
  }, []);

  return (
    <div class="p-3">
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <div className="relative pt-1">
           <h2 className="text-1xl font-bold mb-2 text-white">
            ATH {currentPair.high}
          </h2>
          <h2 className="text-1xl font-bold mb-2 text-white">
            Drop From ATH {parseInt(100 - (currentPrice / currentPair.high) * 100)} %
          </h2>
          <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
            <div
              style={{ width: `${parseInt((currentPrice / currentPair.high) * 100)}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
            ></div>
          </div>
        </div>
        <div className="relative py-3">
          <div className="flex"><h2 className="text-2xl font-bold mb-2 text-white">Current Price</h2><img src={`${mapPair[currentPair.symbol]}.png`} className="px-4 h-8"/></div>
          <div className="bg-purple-600 p-6 rounded-lg shadow-lg items-center text-center">
            <p className="text-white text-2xl">
              {currentPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              USD
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default athDisplay;