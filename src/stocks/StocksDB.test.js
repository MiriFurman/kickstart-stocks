import StocksDB from './StocksDB'
import Stock from './Stock'

describe('StocksDB', () => {
  let stocksDB

  beforeEach(() => {
    stocksDB = StocksDB([
      Stock('ABCD', 'The abcd company'),
      Stock('ABCE', 'ABCE is abcd parent company'),
      Stock('EABC', 'blah blah blah'),
      Stock('XYZ', '3D works'),
      Stock('JFK', 'Presidents Inc.'),
    ])
  })

  describe('getStockBySymbols', () => {

    test('no symbols', () => {
      expect(stocksDB.getStockBySymbols()).toEqual([])
    })

    test('ABCD', () => {
      expect(stocksDB.getStockBySymbols(['ABCD'])).toEqual([Stock('ABCD','The abcd company')])
    })

    test('Apple and Google', () => {
      const stocks = stocksDB.getStockBySymbols(['EABC', 'XYZ'])
      
      expect(stocks).toEqual([
        Stock('EABC','blah blah blah'),
        Stock('XYZ','3D works')
      ])
    })
  })

  describe('searchStocks', () => {
    test('no symbol', () => {
      expect(stocksDB.searchStocks()).toEqual([])
    })

    test('abcd', () => {
      expect(stocksDB.searchStocks('abcd')).toEqual([
        Stock('ABCD', 'The abcd company'),
        Stock('ABCE', 'ABCE is abcd parent company')
      ])
    })
  })
})
