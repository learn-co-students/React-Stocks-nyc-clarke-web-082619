import React from 'react'

const Stock = (props) => (
  
  <div>
    <div className="card" onClick={()=> {typeof props.buyStock === "function" ? props.buyStock(props.id): props.sellStock(props.id) }}>
      <div className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
            props.ticker
          }</p>
      </div>
    </div>
  </div>
);

export default Stock
