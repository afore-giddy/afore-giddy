import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './stripe-form'

class PaymentMethod extends Component {
  render() {
    return (
      <div className="example">
        <CheckoutForm name={'tyler swartz'} />
      </div>
    )
  }
}

export default PaymentMethod
