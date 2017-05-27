import React from 'react'

const Price = ({price, change}) => 
  <span>
    ${ (price + price * change).toFixed(2) }
  </span>

export default Price