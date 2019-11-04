import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  state={
    stockContainer: true
  }


  render() {

    return (
      <div>
        <h2>Stocks</h2>
        {  
          //render the list of stocks here
          this.props.stocks.map( (stock,i) => {
            return <Stock key={i} {...stock} changePortfolio={this.props.changePortfolio} stockContainer={this.state.stockContainer}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
