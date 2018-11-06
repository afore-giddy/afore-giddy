import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'


const Navbar = ({handleClick, isLoggedIn, userId}) => (
  <div>
    <h1>CARS CARS CARS</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/all-cars">All Cars</Link>
          <Link to="/collections">Collections</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/payment-method">Checkout</Link>
          <Link to={`/users/${userId}`}>User</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/all-cars">All Cars</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/payment-method">Checkout</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
