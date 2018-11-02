import React, {Component, Image} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleProduct} from '../../store'

class CartCard extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getSelectedCar(this.props.state.id)
  }

  render() {
    const {handleSubmit, id} = this.props
    const {quantity, color, imageArray} = this.props.state
    const {make, price} = this.props.selectedCar[0]
    return (
      <div>
        <div className="single-cart-container">
          <img src={imageArray[0]} />
        </div>
        <h2>{make}</h2>
        <h2>{color}</h2>
        <h2>{price}</h2>
        <h2>{quantity}</h2>
        <button onClick={() => handleSubmit(id)} type="submit">
          REMOVE FROM CART
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCar: state.product.selectedProduct,
    productReviews: state.review.productReviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSelectedCar: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)
