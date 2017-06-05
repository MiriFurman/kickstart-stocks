import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'
import { CHANGE_PERCENTAGE, CHANGE_DOLLAR } from '../model/changeMode'

const classForChange = change => `label label-${change > 0 ? 'success' : change < 0 ? 'danger' : 'default'}` 

const Percentage = ({change}) => <span>{(change * 100).toFixed(2)}%</span>
const Dollar = ({price, change}) => <span>${(price * change).toFixed(2)}</span>

const changeByMode = changeMode => {
  switch(changeMode){
    case CHANGE_PERCENTAGE: 
      return Percentage
    case CHANGE_DOLLAR:
      return Dollar
    default:
      throw new Error(`Unknown change mode: ${changeMode}`)
  }
}

const Change = ({price, change, changeMode, toggleChangeMode}) => {
  const ChangeByMode = changeByMode(changeMode)
  return (
    <span style={{cursor: 'pointer'}} className={classForChange(change)} onClick={toggleChangeMode}>
      <ChangeByMode price={price} change={change}/>
    </span>
  )
}

Change.propTypes = {
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  changeMode: PropTypes.string.isRequired,
  toggleChangeMode: PropTypes.func.isRequired
}

export default pure(Change)