import React, {Component, Image} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../../store'

class CartCard extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    console.log('HEYHEYHEYHEYEHEYHEYEs', this.state)
    const {id, quantity, color} = this.props.state
    console.log('LOLOLOLOLOLOLOLOL', this.props)
    return (
      <div>
        <h2>{id}</h2>
        <h2>{color}</h2>
        <h2>{quantity}</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)
