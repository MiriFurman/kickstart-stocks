import { filter, includes, map, concat, take, toLower, difference } from 'lodash/fp'

const StocksDB = stocks => ({
  
  getStockBySymbols: symbols => {
    return filter(
      stock => includes(stock.symbol, symbols),
      stocks
    )
  },

  searchStocks: text => {
    const term = toLower(text)
    if(term.length === 0)
      return []

    const bySymbol = filter(
      stock => includes(term, toLower(stock.symbol)),
      stocks
    )

    const byName = filter(
      stock => includes(text, toLower(stock.name)),
      stocks
    )

    const byNameAndNotBySymbol = difference(byName, bySymbol)

    const topBySymbol = take(10, bySymbol)
    const topByName = take(10 - topBySymbol.length, byNameAndNotBySymbol)
    return concat(topBySymbol, topByName)
  },

  update: updateStock => {
    stocks = map(updateStock, stocks)
  }
})

export default StocksDB