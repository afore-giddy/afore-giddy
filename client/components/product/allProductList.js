import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../../store'
import singleProductCard from './singleProductCard'

class allProductList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    return (
      <div>
        {this.props.productList.map(product => {
          return <singleProductCard key={product.id} product={product} />
        })}
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
    getAllProducts: dispatch(fetchAllProducts())
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(allProductList)

export default Connected
