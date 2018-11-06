import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const SingleCollectionCard = props => {
  const collection = props.collection
  return (
    <Link to={`/collections/${collection.id}`}>
    <Card className="single-product-card-container" color='red'>
      <Card.Content>
        <Image id="single-product-card-container-img" src={collection.image} />
        <Card.Header>{collection.name}</Card.Header>
        <Card.Meta>{collection.description}</Card.Meta>
      </Card.Content>
    </Card>
    </Link>
  )
}

export default SingleCollectionCard


