import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../../store'

class SelectedCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this.quantityIncrement = this.quantityIncrement.bind(this)
    this.quantityDecrement = this.quantityDecrement.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getSelectedCar(this.props.match.params.id)
  }

  quantityIncrement() {
    let qty = this.state.quantity
    qty++
    this.setState({
      quantity: qty
    })
    console.log(this.state)
  }
  quantityDecrement() {
    let qty = this.state.quantity
    if (qty > 1) {
      qty--
      this.setState({
        quantity: qty
      })
    } else {
      console.log('cant do that')
    }
  }
  handleSubmit() {
    if (localStorage.cart) {
      let newCart = JSON.stringify({
        quantity: this.state.quantity,
        price: this.props.selectedCar[0].price
      })
      localStorage.cart += ','
      localStorage.cart += newCart
    } else {
      let cart = JSON.stringify({
        quantity: this.state.quantity,
        price: this.props.selectedCar[0].price
      })
      localStorage.setItem('cart', cart)
    }
  }

  render() {
    const car = this.props.selectedCar
    return (
      <div>
        <div className="selected-car-card-top-container">
          <div className="selected-car-card-top-container-header">
            <span>{`Home > ${car[0].collection.name} > ${car[0].make}`}</span>
          </div>
          <div className="selected-car-card-top-container-main">
            <img src={car[0].imageArray[0].default} />
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
                <select>
                  <option>Color</option>
                </select>
                <div className="side-cart-quantity">
                  <span>Quantity</span>
                  <div className="side-cart-quantity-button-container">
                    <button
                      type="button"
                      className="side-cart-quantity-btn"
                      onClick={this.quantityDecrement}
                    >
                      -
                    </button>
                    <span className="side-cart-quantity-state">
                      {this.state.quantity}
                    </span>
                    <button
                      type="button"
                      className="side-cart-quantity-btn"
                      onClick={this.quantityIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="add-to-cart-btn"
                  onClick={this.handleSubmit}
                >
                  Add To Cart
                </button>
                <button className="purchase-btn">Buy It Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCar: state.product.selectedProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSelectedCar: id => dispatch(fetchSingleProduct(id))
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(SelectedCar)

export default Connected
