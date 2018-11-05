import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {MainPage} from './index'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  if (email) {
    return (
      <div>
        <h3>Welcome, {email}!</h3>
        <button type="submit">Edit User information</button>
        <button type="submit">View Cart</button>
        <button type="submit">Track Orders</button>
        <MainPage />
    </div>
    )
  } else {
    return (
      <div>
        <h3>Welcome!</h3>
        <MainPage />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
