import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Row, Well} from 'react-dom'
import {Link} from 'react-router-dom'
import CartCard from './cart-card'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCart: []
    }
  }
  componentDidMount() {
    const cart = localStorage.cart
    const items = cart.split('&').map(item => JSON.parse(item))
    this.setState({currentCart: items})
  }

  render() {
    return (
      <div>
        <h2>SHOPPING CART</h2>
        <br />
        <br />
        <br />
        {this.state.currentCart.map((item, i) => (
          <CartCard key={i} state={this.state} />
        ))}
        <Link to="/home">
          <button type="submit">X</button>
        </Link>
        <br />
        <br />
        <br />
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
