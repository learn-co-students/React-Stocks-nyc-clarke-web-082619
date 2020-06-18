import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stockAPI = 'http://localhost:4001/stocks'

class MainContainer extends Component {

  constructor(){
    super();
    this.state = {
      stockInfo: [],
      stockInfoCopy: [],
      purchasedStock: [],
      alphabetizeSort: false,
      priceSort: false,
      typeFilter: 'All'
    }
  }

  componentDidMount(){
    fetch(stockAPI)
    .then(resp => resp.json())
    .then(stockData => {
      this.setState({
        stockInfo: stockData,
        stockInfoCopy: stockData
      })
    })
  }

  buyStock = (id) => {
    this.state.stockInfoCopy.map(stock => {
      return stock.id === id ? this.setState({purchasedStock: [...this.state.purchasedStock, stock], stockInfo: this.state.stockInfoCopy.filter(stock => stock.id !== id)}) : this.state.stockInfo
    })
  }

  sellStock = (id) => {
    this.state.purchasedStock.map(stock => {
      return stock.id === id ? this.setState({
        purchasedStock: this.state.purchasedStock.filter(stock => stock.id !== id), 
        stockInfo: this.state.stockInfo}) 
        : this.state.purchasedStock
    })
    console.log(this.state.stockInfo)
  }

  handleAlphabetizeSort = () => {
    this.setState({
      alphabetizeSort: !this.state.alphabetizeSort,
      priceSort: false
    })
  }

  handlePriceSort = () => {
    this.setState({
      priceSort: !this.state.priceSort,
      alphabetizeSort: false
    }) 
  }

  handleTypeFilter = (event) => {
    this.setState({
      typeFilter: event.target.value
    })
  }

  renderStockContainer = () => {
    let stocksToShow = this.state.stockInfo
    stocksToShow = this.state.typeFilter === 'All' ?  stocksToShow : stocksToShow.filter(stock => stock.type === this.state.typeFilter)
    stocksToShow = this.state.alphabetizeSort ? stocksToShow.sort((a,b) => a.name < b.name ? -1 : 1) : stocksToShow
    stocksToShow = this.state.priceSort ? stocksToShow.sort((a,b) => a.price < b.price ? -1 : 1) : stocksToShow
    return(
      <StockContainer stocks={stocksToShow} buyStock={this.buyStock}/>
    )
  }

  render() {
    return (
      <div>
        <SearchBar handleAlphabetizeSort={this.handleAlphabetizeSort} handlePriceSort={this.handlePriceSort} handleTypeFilter={this.handleTypeFilter}/>

          <div className="row">
            <div className="col-8">

             {this.renderStockContainer()}

            </div>
            <div className="col-4">

              <PortfolioContainer purchasedStock={this.state.purchasedStock} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
