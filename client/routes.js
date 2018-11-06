import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Signup,
  Login,
  MainPage,
  Billing,
  Shipping,
  Cart,
  SingleCollectionCard
} from './components'
import {AllProductList, SelectedCar} from './components/product'
import {UserProfile, UserHome} from './components/user'
import {me} from './store'
import PaymentMethod from './components/cart/payment-method'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/" component={MainPage} />
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/order" component={Shipping} />
        <Route exact path="/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/all-cars" component={AllProductList} />
            <Route exact path="/all-cars/:id" component={SelectedCar} />
            <Route exact path="/collections" component={AllProductList} />
            <Route exact path="/collections/:id" component={AllProductList} />
            <Route exact path="/users/:id" component={UserProfile} />
            <Route exact path="/payment-method" component={PaymentMethod} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route exact path="/all-cars" component={AllProductList} />
        <Route exact path="/all-cars/:id" component={SelectedCar} />
        <Route exact path="/payment-method" component={PaymentMethod} />
        <Route exact path="/collections" component={AllProductList} />
        <Route exact path="/collections/:id" component={AllProductList} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
