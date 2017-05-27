import React from 'react'
import Change from './Change'
import Price from './Price'
import Highlight from './Highlight'
import { pure } from 'recompose'

const Stock = ({stock, searchTerm, addFavoriteStock, canAdd}) => 
  <tr>
    <td>
      <button className="btn btn-success" disabled={!canAdd} onClick={() => addFavoriteStock(stock.symbol)}>
        <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
      </button>
    </td>
    <td>
      <Highlight text={stock.symbol} term={searchTerm}/>    
    </td>
    <td>
      <Highlight text={stock.name} term={searchTerm}/>    
    </td>
    <td>
      <Price price={stock.price} change={stock.change}/>
    </td>
    <td>
      <Change price={stock.price} change={stock.change}/>
    </td>
  </tr>

export default pure(Stock)