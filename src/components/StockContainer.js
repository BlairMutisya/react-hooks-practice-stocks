import React from "react";
import Stock from "./Stock";

function StockContainer() {
  // Sample array of stock data from db.json
  const stocksData = [
    {
      "id": 1,
      "ticker": "GOOG",
      "name": "Google",
      "type": "Tech",
      "price": 1194.8
    },
    {
      "id": 2,
      "ticker": "FB",
      "name": "Facebook",
      "type": "Tech",
      "price": 168.85
    },
    {
      "id": 3,
      "ticker": "TWTR",
      "name": "Twitter",
      "type": "Tech",
      "price": 29.41
    },
    
  ];

  return (
    <div>
      <h2>Stocks</h2>
      <div>
        {stocksData.map((stock) => (
          <Stock
            key={stock.id}
            ticker={stock.ticker}
            name={stock.name}
            type={stock.type}
            price={stock.price}
          />
        ))}
      </div>
    </div>
  );
}

export default StockContainer;
