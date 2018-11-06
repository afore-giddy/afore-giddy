import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {MainPage} from '../index'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  if (email) {
    return (
      <div className="user-home">
        <h2>Welcome, {email}!</h2>
        <MainPage />
    </div>
    )
  } else {
    return (
      <div className="user-home">
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
