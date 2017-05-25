import React, { Component } from 'react'
import { map } from 'lodash/fp'
import Stock from './Stock'
import PropTypes from 'prop-types'

export default class ChooseStock extends Component { 
  static propTypes = {
    stocks: PropTypes.arrayOf(
      PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        change: PropTypes.number.isRequired
      })).isRequired,
    searchTerm: PropTypes.string.isRequired,
    onSearchTermChange: PropTypes.func.isRequired,
    addFavoriteStock: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <input value={this.props.searchTerm} placeholder="Search for a stock symbol or company name" onChange={e => this.props.onSearchTermChange(e.target.value)}/>
        <table><tbody>
        {
          map(stock => 
            <Stock key={stock.symbol} 
              stock={stock} 
              searchTerm={this.props.searchTerm} 
              addFavoriteStock={this.props.addFavoriteStock}/>,
            this.props.stocks)
        }
        </tbody>
        </table>
      </div>
    )
  }
}