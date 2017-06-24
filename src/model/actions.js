export const SET_VIEW = 'set-view'
export const SET_SEARCH_TERM = 'set-search-term'
export const ADD_FAVORITE_STOCK = 'add-favorite-stock'
export const REMOVE_FAVORITE_STOCK = 'remove-favorite-stocks'
export const ADD_PORTFOLIO_STOCK = 'add-portfolio-stock'
export const REMOVE_PORTFOLIO_STOCK = 'remove-portfolio-stocks'
export const SET_STOCKS = 'update-stocks'
export const TOGGLE_CHANGE_MODE = 'toggle-change-mode'

export const setView = view => ({type: SET_VIEW, view})
export const setSearchTerm = term => ({type: SET_SEARCH_TERM, term})
export const addFavoriteStock = symbol => ({type: ADD_FAVORITE_STOCK, symbol})
export const removeFavoriteStock = symbol => ({type: REMOVE_FAVORITE_STOCK, symbol})
export const addPortfolioStock = symbol => ({type: ADD_PORTFOLIO_STOCK, symbol})
export const removePortfolioStock = symbol => ({type: REMOVE_PORTFOLIO_STOCK, symbol})
export const setStocks = stocks => ({type: SET_STOCKS, stocks})
export const toggleChangeMode = () => ({type: TOGGLE_CHANGE_MODE})