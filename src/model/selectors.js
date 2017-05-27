import { createSelector } from 'reselect'

export const selectSearchTerm = state => state.searchTerm
export const selectStocks = state => state.stocks 
export const selectFavoriteSymbols = state => state.favoriteSymbols
export const selectView = state => state.view

export const selectFavoriteCount = createSelector (
  selectFavoriteSymbols,
  symbols => symbols.length
)
