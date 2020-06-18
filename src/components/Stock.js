import React from 'react'

class Stock extends React.Component {


  buyOrSell = () => {
    if (this.props.isPortfolio){
      this.props.sellStock(this.props.id);
    } else {
      this.props.addToPortfolio(this.props.id)
    }
  }

  render(){
    return(
        <div>
          <div className="card" onClick={this.buyOrSell}>
            <div className="card-body">
              <h5 className="card-title">{
                  this.props.name
                }</h5>
              <p className="card-text">{
                  this.props.ticker
                }: {this.props.price}</p>
            </div>
          </div>
          </div>
          )
        }
      }

export default Stock
