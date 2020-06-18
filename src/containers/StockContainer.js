import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderStocks = () => {
    let stocks = [];

    for(const stock of this.props.stocks.values()) {
      if (stock.type === this.props.filter || this.props.filter === "All")      // filter stock 
        stocks.push(< Stock buyStock={this.props.buyStock} {...stock} />)
    }

    switch(this.props.sort) {
      case "Alphabetically":
        stocks.sort((a,b) => (a.props.name.localeCompare(b.props.name)));
        break;
      case "Price": 
      stocks.sort((a,b) => (a.props.price - b.props.price));
        break;
    }

    return stocks;
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
