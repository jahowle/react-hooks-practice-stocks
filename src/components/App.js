import React, {useState, useEffect} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  
  const [allStocks, setAllStocks] = useState([])
  const [stocks, setStocks] = useState(allStocks)
  const [myStocks, setMyStocks] = useState([])
  const [alphabetize, setAlphabetize] = useState("")
  const [price, setPrice] = useState("")
  const [filter, setFilter] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((data) => {
      setAllStocks(data)
      setStocks(data)
    })
  }, [])

  function buyStock(boughtStock) {
    const updatedStocks = stocks.filter((stock) => stock.name !== boughtStock.name)
    setMyStocks([...myStocks, boughtStock])
    setStocks(updatedStocks)

  }

  function sellStock(soldStock) {
    const updatedStocks = myStocks.filter((stock) => stock.name !== soldStock.name)
    setMyStocks(updatedStocks)
    setStocks([...stocks, soldStock])
  }

  function updateFilter(filterTerm) {
    setFilter(filterTerm)
  }

  function updateAlphabetize(value) {
    setAlphabetize(value)
  }

  function updatePriceFilter(value) {
    setPrice(value)
  }

  const filteredStocks = stocks.filter((stock) => stock.type === filter)

  const sortedStocks = [...filteredStocks].sort((stock1, stock2) => {
    if (alphabetize === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    }
  })

  

  return (
    <div>
      <Header />
      <MainContainer 
        stockMarket={sortedStocks} 
        portfolio={myStocks} 
        handleBuy={buyStock} 
        handleSell={sellStock} 
        handleAlphabetize={updateAlphabetize}
        handlePriceFilter={updatePriceFilter}
        handleFilter={updateFilter}/>
    </div>
  );
}

export default App;
