import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const singleProductCard = props => {
  const product = props.product
  const collection = props.product.collection
  return (
    <div>
      <img src={product.imageArray[0]} />
      <h2>{`${collection.name}: ${product.make}`}</h2>
      <h5>{product.price}</h5>
    </div>
  )
}

export default singleProductCard
