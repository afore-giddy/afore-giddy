import React, {Component, Image} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class CartCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {color, imageArray, make, price, quantity} = this.props.state
    const {cartId, handleRemove} = this.props
    return (
      <div>
        <div className="single-product-card-container">
          <img src={imageArray[0][color]} />
        </div>
        <h2>{make}</h2>
        <h2>{color}</h2>
        <h2>{price}</h2>
        <h2>{quantity}</h2>
        <button onClick={() => handleRemove(cartId)} type="submit">
          REMOVE FROM CART
        </button>
      </div>
    )
  }
}

export default CartCard
