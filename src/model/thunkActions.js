import { debounce } from 'lodash/fp'
import { selectFavoriteSymbols, selectView, selectSearchTerm } from './selectors'
import { VIEW_FAVORITES, VIEW_SEARCH } from './views'
import stocks from '../stocks/stocks'
import { setView, setStocks, setSearchTerm, startRemoteCall, endRemoteCall } from './actions'

export const updateView = view => dispatch => {
  dispatch(setView(view))
  dispatch(updateStocks)
}

export const updateStocks = (dispatch, getState) => {
  const state = getState()
  const view = selectView(state)
  if(view === VIEW_FAVORITES){
    const symbols = selectFavoriteSymbols(state)
    if(symbols.length > 0){
      dispatch(startRemoteCall)
      stocks.getStockBySymbols(symbols)
        .then(stocks => {
          dispatch(setStocks(stocks))
        })
        .catch()
        .then(() => {
          dispatch(endRemoteCall)
        })
    }
  }
  else if (view === VIEW_SEARCH){
    const term = selectSearchTerm(state)
    if(term !== ''){
      dispatch(startRemoteCall)
      stocks.searchStocks(term)
        .then(stocks => {
          dispatch(setStocks(stocks))
        })
        .catch()
        .then(() => {
          dispatch(endRemoteCall)
        })
    }
  }
}
 
const searchStocks = debounce(400, (term, dispatch) => {
  stocks.searchStocks(term).then(stocks => {
    dispatch(setStocks(stocks))
  })
})

export const updateSearchTerm = term => (dispatch, getState) => {
  dispatch(setSearchTerm(term))
  searchStocks(term, dispatch)
}
