import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, handleSell}) {

  const stocksToDisplay = portfolio.map((stock) => {
    return <Stock key={stock.id} stock={stock} onClick={handleSell}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocksToDisplay
      }
    </div>
  );
}

export default PortfolioContainer;
