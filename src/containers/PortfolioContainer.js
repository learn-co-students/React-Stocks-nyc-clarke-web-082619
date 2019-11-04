import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  state={
    stockContainer: false
  }


  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.filter(stock => stock.bought ).map(stock => {
              return <Stock {...stock} key={stock.id} changePortfolio={this.props.changePortfolio}
                stockContainer={this.state.stockContainer}
              />
            })

          }
      </div>
    );
  }

}

export default PortfolioContainer;
