import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  makeStocks = () => {
    if (this.props.filter === "") {
      return this.props.stocks.map(stock => {
        return (
          <Stock
            {...stock}
            handleStockBuyOrSell={this.props.handleStockBuyOrSell}
          />
        );
      });
    } else {
      let stocks = this.props.stocks.filter(stock => {
        return stock.type === this.props.filter;
      });
      return stocks.map(stock => {
        return (
          <Stock
            {...stock}
            handleStockBuyOrSell={this.props.handleStockBuyOrSell}
          />
        );
      });
    }
  };
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.makeStocks()}
      </div>
    );
  }
}

export default StockContainer;
