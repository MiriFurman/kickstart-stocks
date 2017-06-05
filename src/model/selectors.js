import { createSelector } from 'reselect'
import { flow, sortBy, includes, groupBy, mapKeys } from 'lodash/fp'

export const selectSearchTerm = state => state.searchTerm
export const selectStocks = state => state.stocks 
export const selectFavoriteSymbols = state => state.favoriteSymbols
export const selectPortfolioSymbols = state => state.portfolioSymbols
export const selectView = state => state.view
export const selectFavoriteCount = state => state.favoriteSymbols.length
export const selectChangeMode = state => state.changeMode

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

// demonstrates how not using memoization renders redundantly
// ----------------------------------------------------------
// export const selectFavoriteStocks = state =>
//   flow(
//     sortBy('symbol'),
//     groupBy(({symbol}) => includes(symbol, state.portfolioSymbols)),
//     mapKeys(key => key === 'true' ? 'portfolio' : 'following')
//   )(state.stocks)