import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../../store'

class SelectedCar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getSelectedCar(this.props.match.params.id)
  }

  render() {
    const car = this.props.selectedCar
    console.log(car)
    return (
      <div>
        <div className="selected-car-card-top-container">
          <div className="selected-car-card-top-container-header">
            <span>{`Home > Collection > ${car[0].make}`}</span>
          </div>
          <div className="selected-car-card-top-container-main">
            {
              // must be careful here with image
            }
            <img src="car[0].imageArray.silver" />
            <div className="cart">
              <div className="cart-price">
                <span className="cart-price-text">{`$${car[0].price}`}</span>
              </div>
              <button>Add To Cart</button>
              <button>Buy It Now</button>
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
