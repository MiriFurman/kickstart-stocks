import {
  SET_VIEW, SET_SEARCH_TERM, ADD_FAVORITE_STOCK, REMOVE_FAVORITE_STOCK, ADD_PORTFOLIO_STOCK, 
  REMOVE_PORTFOLIO_STOCK, SET_STOCKS, TOGGLE_CHANGE_MODE, START_REMOTE_CALL, END_REMOTE_CALL
} from './actionTypes'

export const setView = view => ({type: SET_VIEW, view})
export const setSearchTerm = term => ({type: SET_SEARCH_TERM, term})
export const addFavoriteStock = symbol => ({type: ADD_FAVORITE_STOCK, symbol})
export const removeFavoriteStock = symbol => ({type: REMOVE_FAVORITE_STOCK, symbol})
export const addPortfolioStock = symbol => ({type: ADD_PORTFOLIO_STOCK, symbol})
export const removePortfolioStock = symbol => ({type: REMOVE_PORTFOLIO_STOCK, symbol})
export const setStocks = stocks => ({type: SET_STOCKS, stocks})
export const toggleChangeMode = () => ({type: TOGGLE_CHANGE_MODE})
export const startRemoteCall = { type: START_REMOTE_CALL } 
export const endRemoteCall = { type: END_REMOTE_CALL } 