import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../../store'
import Cart from './cart'
import PaymentMethod from './payment-method'

/**
 * COMPONENT
 */
class OrderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: {}
    }
  }
  componentDidMount() {
    const {cart} = localStorage
    this.setState({cart: cart})

    function validate(email, password) {
      // true means invalid, so our conditions got reversed
      return {
        email: email.length === 0,
        password: password.length === 0
      }
    }
  }
  render() {
    const {cart} = this.state
    const {name, displayName, handleSubmit, error} = this.props
    return (
      <Fragment>
        <Cart item={cart} />

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
              <small>Street Name</small>
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
      </Fragment>
    )
  }
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

// class SignUpForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',

//       touched: {
//         email: false,
//         password: false,
//       },
//     };
//   }

//   handleEmailChange = (evt) => {
//     this.setState({ email: evt.target.value });
//   }

//   handlePasswordChange = (evt) => {
//     this.setState({ password: evt.target.value });
//   }

//   handleBlur = (field) => (evt) => {
//     this.setState({
//       touched: { ...this.state.touched, [field]: true },
//     });
//   }

//   handleSubmit = (evt) => {
//     if (!this.canBeSubmitted()) {
//       evt.preventDefault();
//       return;
//     }
//     const { email, password } = this.state;
//     alert(`Signed up with email: ${email} password: ${password}`);
//   }

//   canBeSubmitted() {
//     const errors = validate(this.state.email, this.state.password);
//     const isDisabled = Object.keys(errors).some(x => errors[x]);
//     return !isDisabled;
//   }

//   render() {
//     const errors = validate(this.state.email, this.state.password);
//     const isDisabled = Object.keys(errors).some(x => errors[x]);

//     const shouldMarkError = (field) => {
//       const hasError = errors[field];
//       const shouldShow = this.state.touched[field];

//       return hasError ? shouldShow : false;
//     };

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           className={shouldMarkError('email') ? "error" : ""}
//           type="text"
//           placeholder="Enter email"
//           value={this.state.email}
//           onChange={this.handleEmailChange}
//           onBlur={this.handleBlur('email')}
//         />
//         <input
//           className={shouldMarkError('password') ? "error" : ""}
//           type="password"
//           placeholder="Enter password"
//           value={this.state.password}
//           onChange={this.handlePasswordChange}
//           onBlur={this.handleBlur('password')}
//         />
//         <button disabled={isDisabled}>Sign up</button>
//       </form>
//     )
//   }
// }

// ReactDOM.render(<SignUpForm />, document.body);
