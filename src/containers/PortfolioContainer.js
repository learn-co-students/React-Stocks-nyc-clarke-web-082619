import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
  }
  renderPortFolio = () =>{
    let stocks = [];
    for(const stock of this.props.portFolio.values()){
      stocks.push(<Stock sell={"sell"} sellStock={this.props.sellStock} {...stock} />)
    }
    return stocks;
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortFolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
