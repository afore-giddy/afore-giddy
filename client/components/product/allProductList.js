import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts, fetchCollections} from '../../store'
import SingleProductCard from './singleProductCard'
import SingleCollectionCard from '../singleCollectionCard'
import { Grid, Menu } from 'semantic-ui-react'

class AllProductList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllProducts()
    this.props.getCollections()
  }

  render() {

    return (
      <Grid padded centered>
      <Grid.Row container columns={3}>
        {this.props.match.path === "/all-cars" &&
          this.props.productList.map(product => {
          return <Grid.Column width={4}><SingleProductCard key={product.id} product={product} /></Grid.Column>
        })}
        {this.props.match.path === '/collections/:id' && this.props.productList.filter(product => product.collectionId === +this.props.match.params.id).map(product => {
          return <Grid.Column width={4}><SingleProductCard key={product.id} product={product} /></Grid.Column>
        })}
        {this.props.match.path === "/collections" &&
          this.props.collectionList.map(collection => {
          return <Grid.Column width={4}><SingleCollectionCard key={collection.id} collection={collection} /></Grid.Column>
        })}
      </Grid.Row>
      </Grid>
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
