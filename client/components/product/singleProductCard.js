import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const SingleProductCard = props => {
  const product = props.product
  const collection = props.product.collection
  return (
    <div className="single-product-card-container">
      <Link to={`/all-cars/${product.id}`}>
        <img src={product.imageArray[0].default} />
        {props.name === 'order' ? (
          <span />
        ) : (
          <span>{`${collection.name}: ${product.make}`}</span>
        )}
        <span>{`$${product.price}`}</span>

      </Link>
    </div>
  )
}

export default SingleProductCard
