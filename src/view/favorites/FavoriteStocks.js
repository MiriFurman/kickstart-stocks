import React from 'react'
import { pure } from 'recompose'
import { map } from 'lodash/fp'
import FavoriteStock from './FavoriteStock'

const FavoriteStocks = ({stocks, removeStock, addToPortfolio, removeFromPortfolio}) => 
  <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Remove</th>
          <th>Portfolio</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
          map(stock => <FavoriteStock 
            key={stock.symbol} 
            stock={stock} 
            removeStock={removeStock}
            addToPortfolio={addToPortfolio}
            removeFromPortfolio={removeFromPortfolio}
          />, stocks)
        }
      </tbody>
    </table>
  </div>

export default pure(FavoriteStocks)

