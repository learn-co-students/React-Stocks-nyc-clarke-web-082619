import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={() => props.buyStock ? props.buyStock(props.id) : props.sellStock(props.id)}>
      <div className="card-body">
        <h5 className="card-title">
          {props.ticker}
          <br></br>
          <br></br>
        Company: {props.name}
          </h5>
        <p className="card-text">
            Price: ${props.price}
          </p>
      </div>
    </div>


  </div>
);

export default Stock
