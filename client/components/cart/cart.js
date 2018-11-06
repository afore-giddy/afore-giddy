import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartCard from './cart-card'
import {Button, Statistic} from 'semantic-ui-react'
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
    let counter = this.state.updateCounter
    counter++
    this.setState({updateCounter: counter})
  }

  render() {
    console.log('IJOJFIUHSDFSDFJSEGFJYSGE', this.props.currentUser.length)
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
        <br />
        <br />
        <br />

        {/* <h2>SHIPPING AND TAXES</h2> */}
        <Fragment>
          <Statistic color="green">
            <Statistic.Value>
              {' '}
              SUBTOTAL = $
              {currentCart
                ? currentCart
                    .map(product => {
                      return product.quantity * product.price
                    })
                    .reduce((a, b) => a + b, 0)
                : 0}
            </Statistic.Value>
            <Statistic.Label>DOLLARS</Statistic.Label>
          </Statistic>
        </Fragment>
        <div>
          <Link to="/all-cars">
            <Button inverted color="blue">
              CONTINUE SHOPPING
            </Button>
          </Link>
          {this.props.currentCart && this.props.currentCart.length > 0 ? (
            <Link to="/payment-method">
              <Button inverted color="green">
                CHECKOUT >
              </Button>
            </Link>
          ) : (
            <h1>nothing in cart</h1>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productList: state.product.allProducts,
    currentCart: state.cart.currentCart,
    currentUser: state.user
  }
}
const mapDispatchToProps = {fetchCart, removeItemFromCart}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
