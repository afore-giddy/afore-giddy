import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../../store'
import SingleProductCard from './singleProductCard'

//
class AllProductList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    return (
      <div className="product-list-container">
        {this.props.productList.map(product => {
          return <SingleProductCard key={product.id} product={product} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('stattte', state)
  return {
    productList: state.product.allProducts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(fetchAllProducts())
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(AllProductList)

export default Connected
