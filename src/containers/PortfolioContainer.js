import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  makePortfolio = () => {
    return this.props.portfolio.map(stock => {
      return (
        <Stock
          {...stock}
          handleStockBuyOrSell={this.props.handleStockBuyOrSell}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.makePortfolio()}
      </div>
    );
  }
}

export default PortfolioContainer;
