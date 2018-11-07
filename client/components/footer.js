// import React, {Fragment} from 'react'
// import {Link} from 'react-router-dom'
// import {Menu, Image} from 'semantic-ui-react'
// import {Navbar} from './navbar'
// import Routes from '../routes'

// const Footer = () => {
//   return (
//     <Fragment>
//       <hr />
//       <Navbar />
//     </Fragment>
//   )
// }

// export default Footer

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'
import {logout} from '../store'

const Footer = ({handleClick, isLoggedIn, userId}) => (
  <div>
    <hr />
    <nav>
      {isLoggedIn ? (
        <Menu secondary>
          {/* The Footer will show these links after you log in */}
          <Link to="/home">
            <Menu.Item>HOME</Menu.Item>
          </Link>
          <Link to="/all-cars">
            <Menu.Item>CARS</Menu.Item>
          </Link>
          <Link to="/collections">
            <Menu.Item>COLLECTIONS</Menu.Item>
          </Link>

          <Menu.Menu position="right">
            <Link to={`/users/${userId}`}>
              <Menu.Item>USER INFO</Menu.Item>
            </Link>
            <Link to="/cart">
              <Menu.Item>SHOPPING CART</Menu.Item>
            </Link>
            <Link to="/home" onClick={handleClick}>
              <Menu.Item>LOGOUT</Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      ) : (
        <div>
          {/* The Footer will show these links before you log in */}
          <Menu secondary>
            <Link to="/home">
              <Menu.Item>HOME</Menu.Item>
            </Link>
            <Link to="/all-cars">
              <Menu.Item>CARS</Menu.Item>
            </Link>
            <Link to="/collections">
              <Menu.Item>COLLECTIONS</Menu.Item>
            </Link>
            <Menu.Menu position="right">
              <Link to="/cart">
                <Menu.Item>SHOPPING CART</Menu.Item>
              </Link>
              <Link to="/login">
                <Menu.Item>LOGIN</Menu.Item>
              </Link>
              <Link to="/signup">
                <Menu.Item>SIGN UP</Menu.Item>
              </Link>
            </Menu.Menu>
          </Menu>
        </div>
      )}
    </nav>
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

export default connect(mapState, mapDispatch)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
