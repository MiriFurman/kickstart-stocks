import React from 'react'
import { pure } from 'recompose'
import Change from '../ConnectedChange'
import Price from '../Price'
import Highlight from './Highlight'

const Stock = ({stock, searchTerm, addFavoriteStock, canAdd}) => 
  <tr>
    <td>
      <button className="btn btn-success" disabled={!canAdd} onClick={() => addFavoriteStock(stock.symbol)}>
        <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"/>
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