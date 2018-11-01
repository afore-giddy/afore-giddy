import React from 'react'
import {connect} from 'react-redux'

const SingleReviewCard = props => {
  const review = props.review
  console.log('props.review: ', props)
  return (
    <div className="single-review-card-container">
      <h3><span>{review.title}</span></h3>
      <span>{review.text}</span>
    </div>
  )
}

export default SingleReviewCard
