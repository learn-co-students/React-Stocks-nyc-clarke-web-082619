import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const APIStocks = "http://localhost:4000/stocks";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: new Map(),
      portFolio: new Map(),
      filter: "All",
      sort: ""                              
    }
  }

  componentDidMount() {
    fetch(APIStocks)
      .then(resp => resp.json())
      .then (data =>{
        let stocks = new Map();
        data.map(stock => stocks.set(stock.id, stock))
        this.setState(()=>({stocks: stocks}));
      })
  }

  buyStock = (id) => {
    let portFolio = this.state.portFolio;
    portFolio.set(id, this.state.stocks.get(id));
    this.setState(()=>({portFolio: portFolio}))
  }

  filterStocks = (filterType) => {
    this.setState(() => ({filter: filterType}))
  }

  sortStocks =(sortType) => {
    console.log(sortType);
    this.setState(() => ({sort: sortType}))
  }

  sellStock = (id) => {
    let portFolio = this.state.portFolio;
    portFolio.delete(id);
    this.setState(() => ({portFolio:portFolio}))
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} sort={this.state.sort} filterStocks={this.filterStocks} />

          <div className="row">
            <div className="col-8">
              <StockContainer buyStock={this.buyStock} {...this.state}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} portFolio={this.state.portFolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
