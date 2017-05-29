import { connect } from 'react-redux'
import FavoriteStocks from './FavoriteStocks'
import { selectFavoriteStocks } from '../../model/selectors'
import { removeFavoriteStock, addPortfolioStock, removePortfolioStock } from '../../model/actions'

const mapStateToProps = state => ({
  stocks: selectFavoriteStocks(state)
})

const mapDispatchToProps = dispatch => ({
  removeStock: symbol => {
    dispatch(removeFavoriteStock(symbol))
  },
  addToPortfolio: symbol => {
   dispatch(addPortfolioStock(symbol))   
  },
  removeFromPortfolio: symbol => {
    dispatch(removePortfolioStock(symbol))
  }
})

const ConnectedFavoriteStocks = connect(mapStateToProps, mapDispatchToProps)(FavoriteStocks)

export default ConnectedFavoriteStocks