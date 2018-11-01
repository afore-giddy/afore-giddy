// three views
// coustomer information
// shipping inofrmation
// payment

import React, {Component, Image} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Shipping, Billing} from './order-form'

export default class OrderCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Shipping />

        <Billing />
      </div>
    )
  }
}
