import { map } from 'lodash/fp'
import { selectFavoriteStocks } from './selectors'
import stocks from '../stocks/stocks'

export const SET_SEARCH_TERM = 'set-search-term'
export const SET_SEARCHED_STOCKS = 'set-searched-stocks'
export const ADD_FAVORITE_STOCK = 'add-favorite-stock'
export const REMOVE_FAVORITE_STOCK = 'remove-favorite-stocks'
export const UPDATE_FAVORITE_STOCKS = 'update-favorite-stocks'

export const setSearchTerm = term => ({type: SET_SEARCH_TERM, term})
export const setSearchedStocks = stocks => ({type: SET_SEARCHED_STOCKS, stocks})
export const addFavoriteStock = stock => ({type: ADD_FAVORITE_STOCK, stock})
export const removeFavoriteStock = symbol => ({type: REMOVE_FAVORITE_STOCK, symbol})
export const updateFavoriteStocks = stocks => ({type: UPDATE_FAVORITE_STOCKS, stocks})

export const updateRemoteFavoriteStocks = (dispatch, getState) => {
  const symbols = map('symbol', selectFavoriteStocks(getState()))
  stocks.getStockBySymbols(symbols).then(stocks => {
    dispatch(updateFavoriteStocks(stocks))
  })
}

export const updateSearchTerm = term => (dispatch, getState) => {
  dispatch(setSearchTerm(term))
  stocks.searchStocks(term).then(stocks => {
    dispatch(setSearchedStocks(stocks))
  })
}
