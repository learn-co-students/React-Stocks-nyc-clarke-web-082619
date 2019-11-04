import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolio: [],
      filter: "",
      sort: ""
    };
  }

  getStocks = () => {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(json => {
        this.setState({
          stocks: json
        });
      });
  };

  handleStockBuyOrSell = id => {
    let stocks = [...this.state.stocks];
    let portfolio = [...this.state.portfolio];

    let stockInStocks = stocks.find(stock => {
      return stock.id === id;
    });

    if (stockInStocks !== undefined) {
      stocks = stocks.filter(stock => {
        return stock.id !== id;
      });
      let stock = this.state.stocks.find(stock => {
        return stock.id === id;
      });
      portfolio.push(stock);
      this.setState({
        stocks: [...stocks],
        portfolio: [...portfolio]
      });
    } else {
      portfolio = portfolio.filter(stock => {
        return stock.id !== id;
      });
      let stock = this.state.portfolio.find(stock => {
        return stock.id === id;
      });
      stocks.push(stock);
      this.setState({
        stocks: [...stocks],
        portfolio: [...portfolio]
      });
    }
  };

  sortByPrice = stocks => {
    return stocks.sort((a, b) => (a.price > b.price ? 1 : -1));
  };

  sortByName = stocks => {
    return stocks.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  sortOnChange = sort => {
    let stocks = [...this.state.stocks];
    if (sort === "price") {
      stocks = this.sortByPrice(stocks);
    } else {
      stocks = this.sortByName(stocks);
    }
    this.setState({
      stocks: [...stocks],
      sort: sort
    });
  };

  filterOnChange = filter => {
    this.setState({
      filter: filter
    });
  };

  componentDidMount() {
    this.getStocks();
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.stocks}
          handleStockBuyOrSell={this.handleStockBuyOrSell}
          portfolio={this.state.portfolio}
          filter={this.state.filter}
          sort={this.state.sort}
          sortOnChange={this.sortOnChange}
          filterOnChange={this.filterOnChange}
        />
      </div>
    );
  }
}

export default App;
