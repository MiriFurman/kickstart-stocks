import { combineReducers } from 'redux'
import { uniq, without, filter } from 'lodash/fp'
import { SET_VIEW, SET_SEARCH_TERM, ADD_FAVORITE_STOCK, REMOVE_FAVORITE_STOCK,
         ADD_PORTFOLIO_STOCK, REMOVE_PORTFOLIO_STOCK, SET_STOCKS } from './actions'
import { VIEW_SEARCH } from './actions'

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
  searchTerm,
  favoriteSymbols,
  portfolioSymbols,
  stocks
})