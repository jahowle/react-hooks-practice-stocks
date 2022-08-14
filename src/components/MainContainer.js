import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stockMarket, portfolio, handleBuy, handleSell, handleFilter, handleAlphabetize, handlePriceFilter}) {

  return (
    <div>
      <SearchBar handleFilter={handleFilter} handleAlphabetize={handleAlphabetize} handlePriceFilter={handlePriceFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockMarket={stockMarket} handleBuy={handleBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleSell={handleSell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
