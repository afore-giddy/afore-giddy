import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const OrderForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" />

          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" />

          <label htmlFor="streetName">
            <small>Strret Name</small>
          </label>
          <input name="streetName" type="text" />

          <label htmlFor="city">
            <small>City</small>
          </label>
          <input name="city" type="text" />

          <label htmlFor="state">
            <small>State</small>
          </label>
          <input name="state" type="text" />

          <label htmlFor="zipcode">
            <small>Zipcode</small>
          </label>
          <input name="zipcode" type="text" />

          <label htmlFor="phoneNumber">
            <small>Phone Number</small>
          </label>
          <input name="phoneNumber" type="text" />

          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>

        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapShipping = state => {
  return {
    name: 'shipping',
    displayName: 'Place Order',
    error: state.user.error
  }
}

const mapBilling = state => {
  return {
    name: 'billing',
    displayName: 'Place Order',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      dispatch(auth(email, formName))
    }
  }
}

export const Shipping = connect(mapShipping, mapDispatch)(OrderForm)
export const Billing = connect(mapBilling, mapDispatch)(OrderForm)

/**
 * PROP TYPES
 */
OrderForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
