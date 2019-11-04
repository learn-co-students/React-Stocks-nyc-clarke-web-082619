import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <SearchBar filter={this.props.filter} 
                sortByPrice={this.props.sortByPrice} 
                sortByAlpha={this.props.sortByAlpha}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                  stocks={this.props.stocksCopy} 
                  changePortfolio={this.props.changePortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                  stocks={this.props.portfolioCopy}
                  changePortfolio={this.props.changePortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
