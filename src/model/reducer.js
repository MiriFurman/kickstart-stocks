import { combineReducers } from 'redux'
import { uniq, without, filter } from 'lodash/fp'
import { SET_VIEW, SET_SEARCH_TERM, ADD_FAVORITE_STOCK, REMOVE_FAVORITE_STOCK,
         ADD_PORTFOLIO_STOCK, REMOVE_PORTFOLIO_STOCK, SET_STOCKS, TOGGLE_CHANGE_MODE } from './actions'
import { VIEW_SEARCH } from './views'

import { CHANGE_PERCENTAGE, CHANGE_DOLLAR } from './changeMode'

const changeMode = (mode = CHANGE_PERCENTAGE, action) => {
  switch(action.type){
    case TOGGLE_CHANGE_MODE:
      return mode === CHANGE_DOLLAR ? CHANGE_PERCENTAGE : CHANGE_DOLLAR
    default: 
      return mode
  }
}

const view = (viewName = VIEW_SEARCH, action) => {
  switch(action.type){      
    case SET_VIEW:
      return action.view
    default:
      return viewName
  }
}

const searchTerm = (term = '', action) => {
  switch(action.type){
    case SET_SEARCH_TERM: 
      return action.term
    default:
      return term
  }
}

const favoriteSymbols = (symbols = [], action) => {
  switch(action.type){      
    case ADD_FAVORITE_STOCK: 
      return uniq([...symbols, action.symbol])
    case REMOVE_FAVORITE_STOCK:
      return without([action.symbol], symbols)
    default:
      return symbols
  }
}

const portfolioSymbols = (symbols = [], action) => {
  switch(action.type){      
    case ADD_PORTFOLIO_STOCK: 
      return uniq([...symbols, action.symbol])
    case REMOVE_PORTFOLIO_STOCK:
    case REMOVE_FAVORITE_STOCK:
      return without([action.symbol], symbols)    
    default:
      return symbols
  }  
}

const stocks = (stocks = [], action) => {
  switch(action.type){    
    case SET_VIEW:
      return []
    case REMOVE_FAVORITE_STOCK:
      return filter(stock => stock.symbol !== action.symbol, stocks)
    case SET_STOCKS:
      return action.stocks
    default:
      return stocks
  }
}

export default combineReducers({
  view,
  changeMode,
  searchTerm,
  favoriteSymbols,
  portfolioSymbols,
  stocks
})