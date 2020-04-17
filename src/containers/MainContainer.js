import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

state = {
  allStocks: null,
  myStocks: [],
  copyStocks: null
}

componentDidMount(){
  fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => { 
      console.log(stocks)
      this.setState({
       allStocks: stocks,
       copyStocks: stocks
      })
    })
}

buyStock = (stock) => {
 this.setState({
   myStocks: [...this.state.myStocks, stock]
 })
}

removeStock = (stock) => {
  this.setState({
    myStocks: this.state.myStocks.filter(s => s !== stock) 
  })
}

filterStocks = (type) => {
  if(type !== "All"){
    this.setState({
      allStocks: this.state.allStocks.filter(stock => stock.type === type)        
    })
  }else{
    this.setState({
      allStocks: this.state.copyStocks
    })
  }
}

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.allStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
