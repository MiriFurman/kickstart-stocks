import React from 'react'
import Change from './Change'
import Price from './Price'

const Stock = ({stock, removeStock}) =>
  <tr>
    <button onClick={() => removeStock(stock.symbol)}>Remove</button>
    <td>{stock.symbol}</td>
    <td><Price price={stock.price} change={stock.change}/></td>
    <td><Change price={stock.change} change={stock.change}/></td>
  </tr>

export default Stock