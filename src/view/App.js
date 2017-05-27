import React, { Component } from 'react'
import FavoriteCount from './FavoriteCount'
// import { Button, Jumbotron, Container, Row, Col, Badge } from 'reactstrap'

import ConnectedChooseStocks from './ConnectedChooseStocks'
import ConnectedFavoriteStocks from './ConnectedFavoriteStocks'

const VIEW_SEARCH = 'search'
const VIEW_FAVORITES = 'favorites'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      view: VIEW_SEARCH
    }
  }

  getComponentByView() {
    switch(this.state.view){
      case VIEW_SEARCH:
        return <ConnectedChooseStocks/>
      case VIEW_FAVORITES: 
        return <ConnectedFavoriteStocks/>
      default:
        throw new Error(`Unknown view: ${this.state.view}`)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Kickstart Stocks</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button 
                className={`btn ${this.state.view === VIEW_SEARCH ? 'btn-primary' : 'btn-default'}`} 
                onClick={() => {this.setState({view: VIEW_SEARCH})}} 
                disabled={this.state.view === VIEW_SEARCH}>
              Search 
            </button>
            <button 
                className={`btn ${this.state.view === VIEW_FAVORITES ? 'btn-primary' : 'btn-default'}`} 
                onClick={() => {this.setState({view: VIEW_FAVORITES})}} 
                disabled={this.state.view === VIEW_FAVORITES}>
              Favorites <FavoriteCount/>
              
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            { this.getComponentByView() }
          </div>
        </div>
      </div>
    )
  }
}

export default App

     