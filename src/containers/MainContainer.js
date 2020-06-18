import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super();

    this.state ={
      stocks: [],
      portfolio: [],
      sort: null,
      filter: null
    }

    this.getStocks();
  }

  getStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {this.setState({stocks: data})})

  }

  addToPortfolio = (stockId) => {
    let stockToAdd = this.state.stocks.find(stock => stock.id == stockId);
    let newPortfolio = this.state.portfolio.concat(stockToAdd);
    this.setState({portfolio: newPortfolio})
  }

  sellStock = (stockId) => {
    let stockToSellIndex = this.state.portfolio.findIndex(stock => stock.id == stockId);
    this.state.portfolio.splice(stockToSellIndex, 1);
    this.forceUpdate();
  }

  sortAlphabetically = (stockArray) => {
    return stockArray.sort((a, b) => a.ticker > b.ticker ? 1 : -1);
  }

  sortByPrice = (stockArray) => {
    return stockArray.sort((a, b) => a.price > b.price ? 1 : -1);
  }

  setSort = (sortType) => {
    this.setState({sort: sortType})
  }

  setFilter = (filterType) => {
    console.log(filterType)
    this.setState({ filter: filterType})
  }

  filterByType = (stockArray, stockType) => {
    return stockArray.filter(stock => { 
      if (stock.type == stockType){
        return stock
      } })
  }


  render() {
    let stocksToShow = this.state.stocks;
    let portfolioToShow =this.state.portfolio;

    if (this.state.filter != null){
      stocksToShow = this.filterByType(stocksToShow, this.state.filter);
      portfolioToShow = this.filterByType(portfolioToShow, this.state.filter)
    }

    if (this.state.sort == 'alphabetical'){
      stocksToShow = this.sortAlphabetically(stocksToShow);
      portfolioToShow = this.sortAlphabetically(portfolioToShow);
    }

    if (this.state.sort == 'price'){
      stocksToShow = this.sortByPrice(stocksToShow);
      portfolioToShow = this.sortByPrice(portfolioToShow)
    }

    return (
      <div>
        <SearchBar 
        setSort={this.setSort}
        setFilter={this.setFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocksToShow} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.stocks}
               portfolio={portfolioToShow}
               sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
