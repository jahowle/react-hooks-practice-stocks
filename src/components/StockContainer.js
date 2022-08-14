import React from "react";
import Stock from "./Stock";

function StockContainer({stockMarket, handleBuy}) {

  const stocksToDisplay = stockMarket.map((stock) => {
    return <Stock onClick={handleBuy} key={stock.id} stock={stock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
