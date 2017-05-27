import React from 'react'
import { connect } from 'react-redux'
import { selectFavoriteCount } from '../model/selectors'

const FavoriteCount = ({count}) => count > 0 ? <span className="badge">{count}</span> : null

const mapStateToProps = state => ({count: selectFavoriteCount(state)})

const ConnectedFavoriteCount = connect(mapStateToProps)(FavoriteCount)

export default ConnectedFavoriteCount