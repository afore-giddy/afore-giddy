import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './stripe-form'

class PaymentMethod extends Component {
  render() {
    console.log('heyyy')
    return (
      <div className="example">
        <CheckoutForm name={'tyler swartz'} />
      </div>
    )
  }
}

export default PaymentMethod
