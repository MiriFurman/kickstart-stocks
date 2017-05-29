import React from 'react'
import { connect } from 'react-redux'
import { pure } from 'recompose'
import { selectFavoriteCount } from '../../model/selectors'

const FavoriteCount = ({count}) => count > 0 ? <span className="badge">{count}</span> : null

const mapStateToProps = state => ({count: selectFavoriteCount(state)})

const ConnectedFavoriteCount = connect(mapStateToProps)(pure(FavoriteCount))

export default ConnectedFavoriteCount