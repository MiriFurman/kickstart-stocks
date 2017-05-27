import React from 'react'
import { map, includes } from 'lodash/fp'
import Stock from './Stock'
import PropTypes from 'prop-types'
import stockPropType from './stockProps'
import { pure } from 'recompose'

const ChooseStock = ({stocks, favoriteSymbols, searchTerm, onSearchTermChange, addFavoriteStock}) => 
  <div>
    <div className="form-group">
      <input id="term" className="form-control"
        value={searchTerm}
        placeholder="Search for a stock symbol or company name" 
        onChange={e => onSearchTermChange(e.target.value)}
        onClick={e => e.preventDefault()}/>
    </div>

    { 
      stocks.length > 0 
        ? 
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Add</th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
          {
            map(stock => 
              <Stock key={stock.symbol} 
                canAdd={!includes(stock.symbol, favoriteSymbols)}
                stock={stock} 
                searchTerm={searchTerm} 
                addFavoriteStock={addFavoriteStock}/>,
              stocks)
          }
            </tbody>
          </table>
        :
          null
    }
  </div>

ChooseStock.propTypes = {
  stocks: stockPropType,
  favoriteSymbols: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
  addFavoriteStock: PropTypes.func.isRequired
}

export default pure(ChooseStock)