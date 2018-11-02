import React from 'react'
import {connect} from 'react-redux'
import {fetchSelectedCollection, getSelectedCollection} from '../store'
import SingleProductCard from './product/singleProductCard'

class SelectedCollectionList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getSelectedCollection(this.props.match.params.id)
  }

  render() {
    const collection = this.props.collectionProducts[0]
    return (
      <div className="collection-list-container">
        <h2>{collection.name}</h2>
        <span>{collection.description}</span>
        <span>{collection.products.map(product => {
          return <SingleProductCard key={product.id} product={product} />
        })}</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    collectionProducts: state.collection.selectedCollection
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSelectedCollection: id => dispatch(fetchSelectedCollection(id))
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(SelectedCollectionList)

export default Connected

