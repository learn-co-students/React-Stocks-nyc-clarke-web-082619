import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state={
    stocks: [],
    stocksCopy: [],
    portfolioCopy:[]
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({
        stocks: data,
        stocksCopy: data,
        portfolioCopy: data
      })
    })
  }

  changePortfolio = (id, stockContainer) => {
    let newStocks = this.state.portfolioCopy.map((stock, i)=>{
      if(stock.id === id){
        if(stock.bought && !stockContainer){
          return({...stock, bought: false})
        }else{
          return({...stock, bought: true})
        }
      }else {
        return stock
      }
    })
    this.setState({
      portfolioCopy: newStocks
    })
  }



  sortByPrice = (event) => {
    // console.log(event.target.checked);
  let stocksArray = this.state.stocks.sort(function(a,b){
    return a.price - b.price;
  })
  this.setState({
    stocksCopy: stocksArray
  })
}

  sortByAlpha = (event) => {
    // console.log(event.target.checked);
    let stocksArray = this.state.stocks.sort(function(a,b){
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if(nameA<nameB){
        return -1;
      }
      if(nameA>nameB){
        return 1;
      }
      return 0;
    })
    this.setState({
      stocksCopy: stocksArray
    })
  }


  filter = (value) => {
    console.log(value)
    let stocksArray = this.state.stocks.filter(stock => stock.type === value)
    this.setState({
      stocksCopy: stocksArray
    })
  }


  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
            filter={this.filter}
            sortByAlpha={this.sortByAlpha}
            sortByPrice={this.sortByPrice}
            stocks={this.state.stocks} 
            stocksCopy={this.state.stocksCopy}
            portfolioCopy={this.state.portfolioCopy}
            changePortfolio={this.changePortfolio}
        />
      </div>
    );
  }
}

export default App;
