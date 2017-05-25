import StocksDB from './StocksDB'
import StocksAPI from './StocksAPI'
import Stock from './Stock'
import stocksData from './stocks.json'
import { map } from 'lodash/fp'

const updateStock = stock => Stock(stock.symbol, stock.name, stock.price, stock.change += (0.5 - Math.random()) / 25)

const stocks = map(([symbol, name]) => Stock(symbol, name, Math.floor(Math.random() * 80) + 20, 0), stocksData)

const stocksDB = StocksDB(stocks)

setInterval(() => { 
  stocksDB.update(updateStock)
}, 1000)

const stocksAPI = StocksAPI(stocksDB, 1000)

export default stocksAPI 