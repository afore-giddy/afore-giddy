import React from 'react'
import {connect} from 'react-redux'

const SingleReviewCard = props => {
  const review = props.review
  return (
    <div className="single-review-card-container">
      <h3><span>{review.title}</span></h3>
      <h4>{review.rating} Stars</h4>
      <span>{review.text}</span>
    </div>
  )
}

export default SingleReviewCard
