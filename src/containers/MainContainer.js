import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          fitler={this.props.filter}
          sort={this.props.sort}
          sortOnChange={this.props.sortOnChange}
          filterOnChange={this.props.filterOnChange}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              handleStockBuyOrSell={this.props.handleStockBuyOrSell}
              filter={this.props.filter}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              handleStockBuyOrSell={this.props.handleStockBuyOrSell}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
