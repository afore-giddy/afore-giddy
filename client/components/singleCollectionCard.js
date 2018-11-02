import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const SingleCollectionCard = props => {
  const collection = props.collection
  return (
    <div className="single-product-card-container">
      <Link to={`/collections/${collection.id}`}>
        <img src={collection.image} />
        <span>{collection.name}</span>
        <span>{collection.description}</span>
      </Link>
    </div>
  )
}

export default SingleCollectionCard


