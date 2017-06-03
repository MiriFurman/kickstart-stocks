import React from 'react'
import { pure } from 'recompose'
import Change from '../Change'
import Price from '../Price'

const Stock = ({stock, removeStock, inPortfolio, toggleInPortfolio}) =>
  <tr>
    <td>
      <button className="btn btn-danger" onClick={() => removeStock(stock.symbol)}>
        <span className="glyphicon glyphicon-minus-sign" aria-hidden="true"/> 
      </button>
    </td>
    <td>
      {
        inPortfolio 
          ? 
            <button className="btn btn-danger" onClick={() => toggleInPortfolio(stock.symbol)}>
              <span className="glyphicon glyphicon-minus-sign" aria-hidden="true"/>
            </button>
          : 
            <button className="btn btn-success" onClick={() => toggleInPortfolio(stock.symbol)}>
              <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"/>
            </button>
      }
    </td>
    <td>{stock.symbol}</td>
    <td><Price price={stock.price} change={stock.change}/></td>
    <td><Change price={stock.price} change={stock.change}/></td>
  </tr>

export default pure(Stock)