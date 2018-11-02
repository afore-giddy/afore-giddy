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
    const {quantity, color, imageArray} = this.props.state
    const {make, price} = this.props.selectedCar[0]
    console.log('LOLOLOLOLOLOLOLOL', this.props.selectedCar[0])
    console.log('PPPPPPPPPPPPP', this.props.state)
    return (
      <div>
        <div>
          <img src={imageArray[0]} />
        </div>
        <h2>{make}</h2>
        <h2>{color}</h2>
        <h2>{price}</h2>
        <h2>{quantity}</h2>
        <button type="submit">REMOVE FROM CART</button>
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
