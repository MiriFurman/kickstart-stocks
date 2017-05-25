import StocksAPI from './StocksAPI'
import StocksDB from './StocksDB'
import Stock from './Stock'

describe('StocksAPI', () => {
  let stocksAPI

  beforeEach(() => {
    const stocksDB = StocksDB([
      Stock('ABCD', 'The abcd company'),
      Stock('ABCE', 'ABCE is abcd parent company'),
      Stock('EABC', 'blah blah blah'),
      Stock('XYZ', '3D works'),
      Stock('JFK', 'Presidents Inc.'),
    ])

    stocksAPI = StocksAPI(stocksDB)
  })

  describe('getStockBySymbols', () => {
    test('no symbols', async () => {
      expect(await stocksAPI.getStockBySymbols()).toEqual([])
    })

    test('wix', async () => {
      expect(await stocksAPI.getStockBySymbols(['ABCD'])).toEqual([Stock('ABCD','The abcd company')])
    })

    test('Apple and Google', async () => {
      expect(await stocksAPI.getStockBySymbols(['EABC', 'XYZ'])).toEqual([
        Stock('EABC','blah blah blah'),
        Stock('XYZ','3D works')
      ])
    })
  })

describe('searchStocks', () => {
    test('no symbol', async () => {
      expect(await stocksAPI.searchStocks()).toEqual([])
    })

    test('abcd', async () => {
      expect(await stocksAPI.searchStocks('abcd')).toEqual([
        Stock('ABCD', 'The abcd company'),
        Stock('ABCE', 'ABCE is abcd parent company')
      ])
    })
  })
})
 