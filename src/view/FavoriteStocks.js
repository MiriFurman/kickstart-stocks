import React from 'react'
import { map } from 'lodash/fp'
import FavoriteStock from './FavoriteStock'

const FavoriteStocks = ({stocks, removeStock}) => 
  <div>
    <table>
    <tbody>
      {
        map(stock => <FavoriteStock key={stock.symbol} stock={stock} removeStock={removeStock}/>, stocks)
      }
    </tbody>
    </table>
  </div>

export default FavoriteStocks

