import PropTypes from 'prop-types'

export default PropTypes.arrayOf(
  PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired
  })
).isRequired


