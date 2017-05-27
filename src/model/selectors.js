import { createSelector } from 'reselect'

export const selectSearchTerm = state => state.searchTerm
export const selectFavoriteStocks = state => state.favoriteStocks 
export const selectSearchedStocks = state => state.searchedStocks
export const selectFavoriteSymbols = state => state.favoriteSymbols

export const selectFavoriteCount = createSelector (
  selectFavoriteSymbols,
  symbols => symbols.length
)
