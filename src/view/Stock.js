import React from 'react'
import Change from './Change'
import Price from './Price'
import Highlight from './Highlight'

const Stock = ({stock, searchTerm, addFavoriteStock}) => 
  <tr>
    <td>
      <button onClick={() => addFavoriteStock(stock.symbol)}>Add</button>
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

export default Stock