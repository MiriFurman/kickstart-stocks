import { debounce } from 'lodash/fp'
import { selectFavoriteSymbols } from './selectors'
import stocks from '../stocks/stocks'

export const SET_SEARCH_TERM = 'set-search-term'
export const SET_SEARCHED_STOCKS = 'set-searched-stocks'
export const ADD_FAVORITE_STOCK = 'add-favorite-stock'
export const REMOVE_FAVORITE_STOCK = 'remove-favorite-stocks'
export const UPDATE_FAVORITE_STOCKS = 'update-favorite-stocks'

export const setSearchTerm = term => ({type: SET_SEARCH_TERM, term})
export const setSearchedStocks = stocks => ({type: SET_SEARCHED_STOCKS, stocks})
export const addFavoriteStock = symbol => ({type: ADD_FAVORITE_STOCK, symbol})
export const removeFavoriteStock = symbol => ({type: REMOVE_FAVORITE_STOCK, symbol})
export const updateFavoriteStocks = stocks => ({type: UPDATE_FAVORITE_STOCKS, stocks})

export const updateRemoteFavoriteStocks = (dispatch, getState) => {
  const symbols = selectFavoriteSymbols(getState())
  stocks.getStockBySymbols(symbols).then(stocks => {
    dispatch(updateFavoriteStocks(stocks))
  })
}
 
const searchStocks = debounce(100, (term, dispatch) => {
  stocks.searchStocks(term).then(stocks => {
    dispatch(setSearchedStocks(stocks))
  })
})

export const updateSearchTerm = term => (dispatch, getState) => {
  dispatch(setSearchTerm(term))
  searchStocks(term, dispatch)
}
