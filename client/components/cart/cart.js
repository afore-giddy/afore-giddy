import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Row, Well} from 'react-dom'
import {Link} from 'react-router-dom'
import CartCard from './cart-card'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>SHOPPING CART</h2>
        <CartCard />
        <button type="submit">X</button>
        <div>
          <h2>SHIPPING AND TAXES</h2>
          <h2>SUBTOTAL</h2>
          <button type="submit"> CONTINUE SHOPPING </button>
          <button type="submit">CHECKOUT > </button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {}

// const mapDispatchToProps = dispatch => {}

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
export default Cart
