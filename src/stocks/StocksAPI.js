import { delay, clone } from 'lodash/fp'

const StocksAPI = (stocksDB, wait = 0) => ({
  getStockBySymbols: symbols => 
    new Promise(resolve => {
      delay(wait, () => {
        resolve(clone(stocksDB.getStockBySymbols(symbols)))
      })
    }),
  searchStocks: text => 
    new Promise(resolve => {
      delay(wait, () => {
        resolve(clone(stocksDB.searchStocks(text)))
      })
    })
})

export default StocksAPI