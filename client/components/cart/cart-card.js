import React, {Component, Image} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export default class CartCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {quanity, price, color} = this.props.state
    return (
      <div>
        <h2>PRODUCT IMAGE</h2>
        <h2>PRODUCT NAME</h2>
        <h2> - QUANITY + </h2>
        <h2>PRICE</h2>
      </div>
    )
  }
}
