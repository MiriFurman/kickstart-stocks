import React from 'react'
import { connect } from 'react-redux'

import FavoriteCount from './FavoriteCount'
import { VIEW_SEARCH, VIEW_FAVORITES, updateView } from '../model/actions'
import { selectView } from '../model/selectors'

import ConnectedChooseStocks from './ConnectedChooseStocks'
import ConnectedFavoriteStocks from './ConnectedFavoriteStocks'

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

const App = ({view, setView}) => 
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Kickstart Stocks</h1>
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
  view: selectView(state)
})

const mapDispatchToProps = dispatch => ({
  setView: view => dispatch(updateView(view))
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp

     