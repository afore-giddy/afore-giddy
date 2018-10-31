import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../../store'

class SelectedCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0
    }
  }

  componentDidMount() {
    this.props.getSelectedCar(this.props.match.params.id)
  }

  render() {
    const car = this.props.selectedCar
    console.log(car[0])
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
              <select>
                <option>Color</option>
              </select>
              <div className="side-cart-quantity">
                <span>Quantity</span>
                <div className="side-cart-quantity-button-container">
                  <button className="side-cart-quantity-btn">-</button>
                  <span className="side-cart-quantity-state">
                    {this.state.quantity}
                  </span>
                  <button className="side-cart-quantity-btn">+</button>
                </div>
              </div>
              <button className="add-to-cart-btn">Add To Cart</button>
              <button className="purchase-btn">Buy It Now</button>
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
