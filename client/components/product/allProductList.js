import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts, fetchCollections} from '../../store'
import SingleProductCard from './singleProductCard'
import SingleCollectionCard from '../singleCollectionCard'

class AllProductList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllProducts()
    this.props.getCollections()
  }

  render() {
    console.log('MAMAMAMAMAMAMAMAMAMAMAMA', this.props.match.params.id)

    return (
      <div className="product-list-container">
        {this.props.match.path === "/all-cars" &&
          this.props.productList.map(product => {
          return <SingleProductCard key={product.id} product={product} />
        })}
        {this.props.match.path === '/collections/:id' && this.props.productList.filter(product => product.collectionId === +this.props.match.params.id).map(product => {
          return <SingleProductCard key={product.id} product={product} />
        })}
        {this.props.match.path === "/collections" &&
          this.props.collectionList.map(collection => {
          return <SingleCollectionCard key={collection.id} collection={collection} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productList: state.product.allProducts,
    collectionList: state.collections.collections
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(fetchAllProducts()),
    getCollections: () => dispatch(fetchCollections())
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(AllProductList)

export default Connected
