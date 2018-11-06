import React from 'react'
import {connect} from 'react-redux'
import { Card } from 'semantic-ui-react'

const SingleReviewCard = props => {
  const review = props.review
  return (
    <Card.Group>
      <Card className="single-product-card-container" color='red'>
        <Card.Content>
          <Card.Header>{review.title}</Card.Header>
          <Card.Meta>{review.rating} Stars</Card.Meta>
          <Card.Description>{review.text}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default SingleReviewCard
