import React from 'react'

const networkIndicationClassName = on => `glyphicon glyphicon-flash alert ${on ? 'alert-info' : ''}`

const Indicator = ({on}) => 
  <span className={networkIndicationClassName(on)} ariaHidden="true"></span>

export default Indicator