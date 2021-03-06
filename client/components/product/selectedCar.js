import React from 'react'
import {connect} from 'react-redux'
import {
  fetchSingleProduct,
  fetchProductReviews,
  me,
  updateUserCart
} from '../../store'
import SingleReviewCard from '../singleReviewCard'
import {Button, Label} from 'semantic-ui-react'
import {fetchCart, updateCart} from '../../store/cart'

class SelectedCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      color: 'default'
    }
    this.quantityIncrement = this.quantityIncrement.bind(this)
    this.quantityDecrement = this.quantityDecrement.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id)
    this.props.fetchProductReviews(this.props.match.params.id)
    this.props.fetchCart()
    this.props.me()
  }

  quantityIncrement() {
    let qty = this.state.quantity
    qty++
    this.setState({
      quantity: qty
    })
  }
  quantityDecrement() {
    let qty = this.state.quantity
    if (qty > 1) {
      qty--
      this.setState({
        quantity: qty
      })
    } else {
      alert('oops')
    }
  }

  handleChange(evt) {
    this.setState({
      color: evt.target.value
    })
  }

  handleSubmit() {
    const {quantity, color} = this.state
    const {selectedCar} = this.props
    const {id} = this.props.currentUser
    selectedCar[0].quantity = quantity
    selectedCar[0].color = color
    if (!this.props.currentUser.id) {
      this.props.updateCart(selectedCar[0])
    } else {
      this.props.updateCart(selectedCar[0])
      this.props.updateUserCart(selectedCar[0], id)
    }
  }

  render() {
    const car = this.props.selectedCar
    const reviews = this.props.productReviews

    const colors = Object.keys(car[0].imageArray[0]).slice(1)

    let currentColor = this.state.color

    if (currentColor === 'Select A Color') {
      currentColor = 'default'
    }
    return (
      <div>
        <div className="selected-car-card-top-container">
          <div className="selected-car-card-top-container-header">
            <span>{`Home > ${car[0].collection.name} > ${car[0].make}`}</span>
          </div>
          <div className="selected-car-card-top-container-main">
            <img src={car[0].imageArray[0][currentColor]} />
            <div className="side-cart">
              <div className="side-cart-price">
                <span className="side-cart-price-text">{`$${
                  car[0].price
                }`}</span>
              </div>
              <div className="reviews">{`Total Reviews: ${
                car[0].reviews.length
              }`}</div>
              <form className="side-cart-form">
                <select onChange={this.handleChange}>
                  <option>Select A Color</option>
                  {colors.map(color => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                <div className="side-cart-quantity">
                  <span>Quantity</span>
                  <div className="side-cart-quantity-button-container">
                    <Button
                      type="button"
                      // className="side-cart-quantity-btn"
                      onClick={this.quantityDecrement}
                    >
                      -
                    </Button>
                    {/* <span className="side-cart-quantity-state"> */}
                    <Label>{this.state.quantity}</Label>
                    {/* </span> */}
                    <Button
                      type="button"
                      // className="side-cart-quantity-btn"
                      onClick={this.quantityIncrement}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  type="button"
                  className="add-to-cart-btn"
                  onClick={this.handleSubmit}
                >
                  Add To Cart
                </Button>
                <Button className="purchase-btn">Buy It Now</Button>
              </form>
            </div>
          </div>
        </div>
        <h2>CUSTOMER REVIEWS</h2>
        {reviews.map(review => {
          return <SingleReviewCard key={review.id} review={review} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCar: state.product.selectedProduct,
    productReviews: state.review.productReviews,
    currentCart: state.cart.currentCart,
    currentUser: state.user
  }
}

const mapDispatchToProps = {
  fetchSingleProduct,
  fetchProductReviews,
  fetchCart,
  updateCart,
  me,
  updateUserCart
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(SelectedCar)

export default Connected
