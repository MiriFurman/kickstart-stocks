import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styleForChange = change => ({
  backgroundColor: change > 0 ? 'green' : change < 0 ? 'red' : '',
  color: 'white',
  padding: '0 10px'
})

export default class Change extends Component {
  
  static propTypes = {
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      percentage: true
    }
  }

  render() {
    const { price, change } = this.props
    const { percentage } = this.state

    return (
      <span style={styleForChange(change)} onClick={() => this.setState({percentage: !percentage})}>
        {
          percentage ? <span>{(change * 100).toFixed(2)}%</span> : (price * change).toFixed(2)
        }
      </span>
    )
  }
}

