import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const SingleProductCard = props => {
  const product = props.product
  const collection = props.product.collection
  return (
    <Link to={`/all-cars/${product.id}`}>
      <Card className="single-product-card-container" color='red'>
          <Card.Content>
          <Image id="single-product-card-container-img" src={product.imageArray[0].default} />
            {props.name === 'order' ? (
              <span />
            ) : (
              <Card.Header>{`${collection.name}: ${product.make}`}</Card.Header>
            )}
            <Card.Meta>{`$${product.price}`}</Card.Meta>
          </Card.Content>
      </Card>
    </Link>
  )
}

export default SingleProductCard
