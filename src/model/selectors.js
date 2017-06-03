import { createSelector } from 'reselect'
import { flow, sortBy, includes, groupBy, mapKeys } from 'lodash/fp'

export const selectSearchTerm = state => state.searchTerm
export const selectStocks = state => state.stocks 
export const selectFavoriteSymbols = state => state.favoriteSymbols
export const selectPortfolioSymbols = state => state.portfolioSymbols
export const selectView = state => state.view
export const selectFavoriteCount = state => state.favoriteSymbols.length

export const selectFavoriteStocks = createSelector (
  selectStocks,
  selectPortfolioSymbols,
  (stocks, portfolioSymbols) => 
    flow(
      sortBy('symbol'),
      groupBy(({symbol}) => includes(symbol, portfolioSymbols)),
      mapKeys(key => key === 'true' ? 'portfolio' : 'following')
    )(stocks)
)
 