import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  renderStocks = () => {
    if(this.props.stocks){
      return this.props.stocks.map(stock => <Stock stock={stock} buyStock={this.props.buyStock} />)
    }
  }

  render() {
    console.log(this.props.stocks)
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
