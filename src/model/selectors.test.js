import { selectFavoriteStocks } from './selectors'
import Stock from '../stocks/Stock'

test('Favorite stocks', () => {
  const state = {
    stocks: [
      Stock('CC', 'CC company', 70, 0),
      Stock('AA', 'AA company', 50, 2),
      Stock('BB', 'BB company', 60, -2)
    ],
    portfolioSymbols: ['AA', 'CC']
  }

  expect(selectFavoriteStocks(state)).toEqual({
    portfolio: [
      Stock('AA', 'AA company', 50, 2),
      Stock('CC', 'CC company', 70, 0)
    ],
    following: [
      Stock('BB', 'BB company', 60, -2)
    ]
  })
})