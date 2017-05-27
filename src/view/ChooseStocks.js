import React, { Component } from 'react'
import { map, includes } from 'lodash/fp'
import Stock from './Stock'
import PropTypes from 'prop-types'
import stockPropType from './stockProps'

export default class ChooseStock extends Component { 
  static propTypes = {
    stocks: stockPropType,
    favoriteSymbols: PropTypes.arrayOf(PropTypes.string).isRequired,
    searchTerm: PropTypes.string.isRequired,
    onSearchTermChange: PropTypes.func.isRequired,
    addFavoriteStock: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input id="term" className="form-control"
            value={this.props.searchTerm}
            placeholder="Search for a stock symbol or company name" 
            onChange={e => this.props.onSearchTermChange(e.target.value)}
            onClick={e => e.preventDefault()}/>
        </div>

        { 
          this.props.stocks.length > 0 
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
                    canAdd={!includes(stock.symbol, this.props.favoriteSymbols)}
                    stock={stock} 
                    searchTerm={this.props.searchTerm} 
                    addFavoriteStock={this.props.addFavoriteStock}/>,
                  this.props.stocks)
              }
                </tbody>
              </table>
            :
              null

        }
      </div>
    )
  }
}