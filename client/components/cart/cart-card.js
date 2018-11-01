import React, {Component, Image} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export default class CartCard extends Component {
  constructor() {
    super()
  }
  render() {
    const product = props.product
    const collection = props.product.collection
    return (
      <div className="single-product-card-container">
        <Link to={`/all-cars/${product.id}`}>
          <Image src={product.imageArray[0].default} rounded responsive />
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
}
