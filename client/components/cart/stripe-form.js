import React, {Component} from 'react'
import axios from 'axios'
import {
  CardElement,
  injectStripe,
  PostalCodeElement,
  CardCVCElement,
  CardNumberElement,
  PaymentRequestButtonElement
} from 'react-stripe-elements'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import placeOrder from '../../store'

import STRIPE_PUBLISHABLE from './constants/stripe'
import PAYMENT_SERVER_URL from './constants/server'

// const CURRENCY = 'USD'

// const fromUSDToCent = amount => amount * 100

// const successPayment = async data => {
//   console.log('about to process payment')
//   props.postOrder({
//     status: 'Completed',
//     userId: 1,
//     total: 100
//   })
//   console.log('post success')
// }

// const errorPayment = data => {
//   alert('Payment Error')
// }

// const onToken = (amount, description) => token =>
//   axios
//     .post(PAYMENT_SERVER_URL, {
//       description,
//       source: token.id,
//       currency: CURRENCY,
//       amount: fromUSDToCent(amount)
//     })
//     .then(successPayment)
//     .catch(errorPayment)

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
  }

  fromUSDToCent = amount => amount * 100

  successPayment = async data => {
    // this.props.placeOrder({
    //   status: 'Completed',
    //   total: 200,
    //   cart: [
    //     {
    //       id: 2,
    //       finalPrice: 100,
    //       quantity: 1
    //     }
    //   ]
    // })
    alert('fuck year')
  }

  errorPayment = data => {
    alert('Payment Error')
  }

  onToken = (amount, description) => token => {
    axios
      .post('/api/orders', {
        status: 'Completed',
        total: 200,
        cart: [
          {
            id: 2,
            finalPrice: 100,
            quantity: 1
          },
          {
            id: 3,
            finalPrice: 200,
            quantity: 100
          }
        ]
      })
      .then(this.successPayment)
      .catch(this.errorPayment)
  }

  render() {
    return (
      <StripeCheckout
        name={name}
        description={'Purchase from Afore Giddy'}
        amount={() => this.fromUSDToCent(100)}
        token={this.onToken(100, 'Purchase from Afore Giddy')}
        currency={'USD'}
        stripeKey={STRIPE_PUBLISHABLE}
      />
    )
  }
}

// const inject = injectStripe(CheckoutForm)

const mapDispatchToProps = dispatch => {
  return {
    placeOrder: order => dispatch(placeOrder(order))
  }
}

const connected = connect(null, mapDispatchToProps)(CheckoutForm)

export default connected
