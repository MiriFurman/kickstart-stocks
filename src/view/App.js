import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kickstart Stocks</h2>
        </div>

        <p className="App-intro"></p>
  
        <div>
          <button onClick={() => {this.setState({view: VIEW_SEARCH})}} disabled={this.state.view === VIEW_SEARCH}>Search</button>
          <button onClick={() => {this.setState({view: VIEW_FAVORITES})}} disabled={this.state.view === VIEW_FAVORITES}>Favorites</button>
        </div>

        { this.getComponentByView() }
      </div>
    )
  }
}

export default App
