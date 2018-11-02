import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Row, Well} from 'react-dom'
import {Link} from 'react-router-dom'
import CartCard from './cart-card'
import {fetchAllProducts} from '../../store'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      localCart: []
    }
  }
  componentDidMount() {
    const cart = localStorage.cart
    if (cart) {
      const items = cart ? cart.split('&').map(item => JSON.parse(item)) : []
      this.setState({localCart: items})
    }
  }

  handleSubmit(eventId) {
    const cart = localStorage.cart
    if (cart) {
      const items = cart ? cart.split('&').map(item => JSON.parse(item)) : []
      items.splice(eventId, 1)

      this.setState({localCart: items})
    }
  }

  render() {
    if (localStorage.cart) {
      const cart = localStorage.cart.split('&').map(item => JSON.parse(item))
      let total = cart.map(item => item.price).reduce((a, b) => a + b)
    }

    return (
      <div>
        <h2>SHOPPING CART</h2>
        <br />
        <br />
        <br />
        {this.state.localCart.map((item, i) => (
          <CartCard
            id={i}
            key={i}
            state={item}
            handleSubmit={this.handleSubmit}
          />
        ))}
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
    productList: state.product.allProducts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
