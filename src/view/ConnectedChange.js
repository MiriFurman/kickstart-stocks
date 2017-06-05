import { connect } from 'react-redux'
import Change from './Change'
import { toggleChangeMode } from '../model/actions'
import { selectChangeMode } from '../model/selectors'

const ConnectedChange = connect(
  state => ({
    changeMode: selectChangeMode(state)
  }),
  dispatch => ({
    toggleChangeMode: () => {
      dispatch(toggleChangeMode())
    }
  })
)(Change)

export default ConnectedChange