import React, {Component} from 'react'
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

const CURRENCY = 'USD'

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
  alert('Payment Successful')
}

const errorPayment = data => {
  alert('Payment Error')
}

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment)

const CheckoutForm = props => {
  return (
    <StripeCheckout
      name={name}
      description={'Purchase from Afore Giddy'}
      amount={fromUSDToCent(100)}
      token={onToken(100, 'Purchase from Afore Giddy')}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  )
}

// const inject = injectStripe(CheckoutForm)

// const mapDispatchToProps = dispatch => {
//   return {
//     postOrder: order => dispatch(placeOrder(order))
//   }
// }

// const connected = connect(null, mapDispatchToProps)(inject)

export default CheckoutForm
