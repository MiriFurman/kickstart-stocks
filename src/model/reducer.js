import { uniq, without, filter } from 'lodash/fp'
import { SET_VIEW, SET_SEARCH_TERM, ADD_FAVORITE_STOCK, REMOVE_FAVORITE_STOCK, SET_STOCKS } from './actions'
import { VIEW_SEARCH } from './actions'

const defaultState = {
  view: VIEW_SEARCH,
  searchTerm: '',
  favoriteSymbols: [],
  stocks: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case SET_VIEW:
      return {
        ...state,
        view: action.view,
        stocks: []
      }
    case SET_SEARCH_TERM: 
      return {
        ...state,
        searchTerm: action.term
      }
    case ADD_FAVORITE_STOCK: 
      return {
        ...state,
        favoriteSymbols: uniq([...state.favoriteSymbols, action.symbol])
      }
    case REMOVE_FAVORITE_STOCK:
      return {
        ...state,
        favoriteSymbols: without([action.symbol], state.favoriteSymbols),
        stocks: filter(stock => stock.symbol !== action.symbol, state.stocks)
      }
    case SET_STOCKS:
      return {
        ...state, 
        stocks: action.stocks
      }
    default:
      return state
  }
}

export default reducer