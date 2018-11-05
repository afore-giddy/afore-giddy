import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartCard from './cart-card'
import {fetchAllProducts} from '../../store'
import {fetchCart, updateCart, removeItemFromCart} from '../../store/cart'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateCounter: 0
    }
    this.handleRemove = this.handleRemove.bind(this)
  }
  componentDidMount() {
    this.props.fetchCart()
  }

  handleRemove(eventId) {
    this.props.removeItemFromCart(eventId)
    console.log('BEFORE THE SETSTATE', this.state)
    console.log('AFTER THE SETSTATE', this.state)
    // this.props.fetchCart()
    let counter = this.state.updateCounter
    counter++
    this.setState({updateCounter: counter})
  }

  render() {
    const {currentCart} = this.props

    return (
      <div>
        <h2>SHOPPING CART</h2>
        <br />
        <br />
        <br />
        {currentCart ? (
          currentCart.map((item, i) => (
            <CartCard
              key={i}
              cartId={i}
              state={item}
              handleRemove={this.handleRemove}
            />
          ))
        ) : (
          <h3>YOUR CART IS EMPTY</h3>
        )}
        <Link to="/home">
          <button type="submit">X</button>
        </Link>
        <br />
        <br />
        <br />
        <div>
          <h2>SHIPPING AND TAXES</h2>
          <h2>SUBTOTAL = $ total.00 </h2>
          <button type="submit"> CONTINUE SHOPPING </button>
          <button type="submit">CHECKOUT > </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productList: state.product.allProducts,
    currentCart: state.cart.currentCart
  }
}
const mapDispatchToProps = {fetchCart, removeItemFromCart}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
