import { delay } from 'lodash/fp'

const StocksAPI = (stocksDB, wait = 0) => ({
  getStockBySymbols: symbols => 
    new Promise(resolve => {
      delay(wait, () => {
        resolve(stocksDB.getStockBySymbols(symbols))
      })
    }),
  searchStocks: text => 
    new Promise(resolve => {
      delay(wait, () => {
        resolve(stocksDB.searchStocks(text))
      })
    })
})

export default StocksAPI