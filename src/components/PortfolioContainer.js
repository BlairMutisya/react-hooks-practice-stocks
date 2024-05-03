import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer() {
  // State to store the list of stocks in the portfolio
  const [portfolioStocks, setPortfolioStocks] = useState([
    // Initial list of stocks in the portfolio
    { id: 1, name: "Google", ticker: "GOOG", price: 1194.8 },
    { id: 2, name: "Facebook", ticker: "FB", price: 168.85 },
    // Add more stocks as needed
  ]);

  // Function to handle selling a stock
  const sellStock = (id) => {
    // Filter out the stock with the given id from the portfolio
    const updatedPortfolio = portfolioStocks.filter((stock) => stock.id !== id);
    // Update the portfolio state with the filtered list
    setPortfolioStocks(updatedPortfolio);
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      {/* Render each stock in the portfolio */}
      {portfolioStocks.map((stock) => (
        <Stock
          key={stock.id}
          name={stock.name}
          ticker={stock.ticker}
          price={stock.price}
          // Attach event handler to sell the stock when clicked
          onClick={() => sellStock(stock.id)}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
