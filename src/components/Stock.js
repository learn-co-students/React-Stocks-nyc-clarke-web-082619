import React from "react";

const handleStockBuyOrSell = props => {
  props.handleStockBuyOrSell(props.id);
};
const Stock = props => (
  <div>
    <div className="card">
      <div
        className="card-body"
        onClick={() => {
          handleStockBuyOrSell(props);
        }}
      >
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
      </div>
    </div>
  </div>
);

export default Stock;
