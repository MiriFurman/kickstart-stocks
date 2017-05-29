import { debounce } from 'lodash/fp'
import { selectFavoriteSymbols, selectView, selectSearchTerm } from './selectors'
import stocks from '../stocks/stocks'

export const VIEW_SEARCH = 'search'
export const VIEW_FAVORITES = 'favorites'

export const SET_VIEW = 'set-view'
export const SET_SEARCH_TERM = 'set-search-term'
export const ADD_FAVORITE_STOCK = 'add-favorite-stock'
export const REMOVE_FAVORITE_STOCK = 'remove-favorite-stocks'
export const ADD_PORTFOLIO_STOCK = 'add-portfolio-stock'
export const REMOVE_PORTFOLIO_STOCK = 'remove-portfolio-stocks'
export const SET_STOCKS = 'update-stocks'

export const setView = view => ({type: SET_VIEW, view})
export const setSearchTerm = term => ({type: SET_SEARCH_TERM, term})
export const addFavoriteStock = symbol => ({type: ADD_FAVORITE_STOCK, symbol})
export const removeFavoriteStock = symbol => ({type: REMOVE_FAVORITE_STOCK, symbol})
export const addPortfolioStock = symbol => ({type: ADD_PORTFOLIO_STOCK, symbol})
export const removePortfolioStock = symbol => ({type: REMOVE_PORTFOLIO_STOCK, symbol})
export const setStocks = stocks => ({type: SET_STOCKS, stocks})

export const updateView = view => dispatch => {
  dispatch(setView(view))
  dispatch(updateStocks)
}

export const updateStocks = (dispatch, getState) => {
  const state = getState()
  const view = selectView(state)
  if(view === VIEW_FAVORITES){
    const symbols = selectFavoriteSymbols(state)
    if(symbols.length > 0){
      stocks.getStockBySymbols(symbols).then(stocks => {
        dispatch(setStocks(stocks))
      })
    }
  }
  else if (view === VIEW_SEARCH){
    const term = selectSearchTerm(state)
    if(term !== ''){
      stocks.searchStocks(term).then(stocks => {
        dispatch(setStocks(stocks))
      })
    }
  }
}
 
const searchStocks = debounce(400, (term, dispatch) => {
  stocks.searchStocks(term).then(stocks => {
    dispatch(setStocks(stocks))
  })
})

export const updateSearchTerm = term => (dispatch, getState) => {
  dispatch(setSearchTerm(term))
  searchStocks(term, dispatch)
}
