import React from 'react'
import { pure } from 'recompose'
import PropTypes from 'prop-types'

const Price = ({price, change}) => 
  <span>
    ${ (price + price * change).toFixed(2) }
  </span>

Price.propTypes = {
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired
}

export default pure(Price)