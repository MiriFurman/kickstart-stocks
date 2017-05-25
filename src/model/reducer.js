import { uniqBy, filter } from 'lodash/fp'
import { SET_SEARCH_TERM, SET_SEARCHED_STOCKS, ADD_FAVORITE_STOCK, REMOVE_FAVORITE_STOCK, UPDATE_FAVORITE_STOCKS } from './actions'

const defaultState = {
  searchTerm: '',
  favoriteStocks: [],
  searchedStocks: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case SET_SEARCH_TERM: 
      return {...state, searchTerm: action.term}
    case SET_SEARCHED_STOCKS:
      return {...state, searchedStocks: action.stocks}
    case ADD_FAVORITE_STOCK: 
      return {...state, favoriteStocks: uniqBy('symbol', [...state.favoriteStocks, action.stock])}
    case REMOVE_FAVORITE_STOCK:
      return {...state, favoriteStocks: filter(stock => stock.symbol !== action.symbol, state.favoriteStocks)}
    case UPDATE_FAVORITE_STOCKS:
      return {...state, favoriteStocks: action.stocks}
    default:
      return state
  }
}

export default reducer