import React from 'react'
import Change from './Change'
import Price from './Price'

const Stock = ({stock, removeStock}) =>
  <tr>
    <td>
      <button className="btn btn-danger" onClick={() => removeStock(stock.symbol)}>
        <span className="glyphicon glyphicon-minus-sign" aria-hidden="true"> </span>
      </button>
    </td>
    <td>{stock.symbol}</td>
    <td><Price price={stock.price} change={stock.change}/></td>
    <td><Change price={stock.price} change={stock.change}/></td>
  </tr>

export default Stock