import React from 'react'
import { connect } from 'react-redux'
import { pure } from 'recompose'

import FavoriteCount from '../favorites/FavoriteCount'
import { updateView } from '../../model/thunkActions'
import { VIEW_SEARCH, VIEW_FAVORITES } from '../../model/views'
import { selectView, selectNetworkStatus } from '../../model/selectors'
import Indicator from './Indicator'
import ConnectedChooseStocks from '../search/ConnectedChooseStocks'
import ConnectedFavoriteStocks from '../favorites/ConnectedFavoriteStocks'
import { NETWORK_IN_PROGRESS } from '../../model/networkStatus'
const getComponentByView = view => {
  switch(view){
    case VIEW_SEARCH:
      return <ConnectedChooseStocks/>
    case VIEW_FAVORITES: 
      return <ConnectedFavoriteStocks/>
    default:
      throw new Error(`Unknown view: ${view}`)
  }
}

const App = ({view, setView, networkStatus}) => 
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Kickstart Stocks <Indicator on={networkStatus === NETWORK_IN_PROGRESS}/></h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <button 
            className={`btn ${view === VIEW_SEARCH ? 'btn-primary' : 'btn-default'}`} 
            onClick={() => {setView(VIEW_SEARCH)}} 
            disabled={view === VIEW_SEARCH}>
          Search 
        </button>
        <button 
            className={`btn ${view === VIEW_FAVORITES ? 'btn-primary' : 'btn-default'}`} 
            onClick={() => {setView(VIEW_FAVORITES)}} 
            disabled={view === VIEW_FAVORITES}>
          Favorites <FavoriteCount/>
          
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        { getComponentByView(view) }
      </div>
    </div>
  </div>

const mapStateToProps = state => ({
  view: selectView(state),
  networkStatus: selectNetworkStatus(state)
})

const mapDispatchToProps = dispatch => ({
  setView: view => dispatch(updateView(view))
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(pure(App))
export default ConnectedApp

     