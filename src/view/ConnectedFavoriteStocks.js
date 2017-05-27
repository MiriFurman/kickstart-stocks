import { connect } from 'react-redux'
import FavoriteStocks from './FavoriteStocks'
import { selectStocks } from '../model/selectors'
import { removeFavoriteStock } from '../model/actions'

const mapStateToProps = state => ({
  stocks: selectStocks(state)
})

const mapDispatchToProps = dispatch => ({
  removeStock: symbol => {
    dispatch(removeFavoriteStock(symbol))
  }
})

const ConnectedFavoriteStocks = connect(mapStateToProps, mapDispatchToProps)(FavoriteStocks)

export default ConnectedFavoriteStocks