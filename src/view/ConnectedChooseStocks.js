import { connect } from 'react-redux'
import ChooseStocks from './ChooseStocks'
import { selectSearchTerm, selectSearchedStocks } from '../model/selectors'
import { updateSearchTerm, addFavoriteStock } from '../model/actions'

const mapStateToProps = state => ({
  stocks: selectSearchedStocks(state),
  searchTerm: selectSearchTerm(state)
})

const mapDispatchToProps = dispatch => ({
  onSearchTermChange: term => {
    dispatch(updateSearchTerm(term))
  },
  addFavoriteStock: stock => {
    dispatch(addFavoriteStock(stock))
  }
})

const ConnectedChooseStock = connect(mapStateToProps, mapDispatchToProps)(ChooseStocks)

export default ConnectedChooseStock