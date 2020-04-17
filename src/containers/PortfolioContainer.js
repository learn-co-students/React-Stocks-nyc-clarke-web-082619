import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderMyStocks = () => {
    if(this.props.myStocks){
      return this.props.myStocks.map(stock => <Stock stock={stock} removeStock={this.props.removeStock}/>)
    }
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderMyStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
