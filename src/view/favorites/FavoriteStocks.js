import React from 'react'
import { pure } from 'recompose'
import { map } from 'lodash/fp'
import Stock from './Stock'

const StockTable = ({stocks, removeStock, moveTo, inPortfolio, toggleInPortfolio}) => 
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Remove</th>
        <th>{moveTo}</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      {
        map(stock => <Stock 
          key={stock.symbol} 
          stock={stock} 
          removeStock={removeStock}
          inPortfolio={inPortfolio}
          toggleInPortfolio={toggleInPortfolio}
        />, stocks)
      }
    </tbody>
  </table> 

const FavoriteStocks = ({stocks, removeStock, addToPortfolio, removeFromPortfolio}) => 
  <div>
    <h2>Portfolio Stocks</h2>
    {
      stocks.portfolio 
        ? <StockTable stocks={stocks.portfolio} removeStock={removeStock} moveTo='Remove from Portfolio' inPortfolio={true} toggleInPortfolio={removeFromPortfolio}/>
        : <span>No stocks in portfolio</span>
    }
    <h2>Following Stocks</h2>
    {
      stocks.following
        ? <StockTable stocks={stocks.following} removeStock={removeStock} moveTo='Add to Portfolio' inPortfolio={false} toggleInPortfolio={addToPortfolio}/>
        : <span>Not following stocks which are not in portfolio</span>
    }
  </div>

export default pure(FavoriteStocks)

