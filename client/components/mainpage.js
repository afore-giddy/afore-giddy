import React from 'react'
import {connect} from 'react-redux'
import {
  fetchFeaturedProducts,
  getFeaturedProducts,
  getFeaturedReviews,
  fetchFeaturedReviews
} from '../store'
import SingleProductCard from './product/singleProductCard'
import SingleReviewCard from './singleReviewCard'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFeaturedProducts()
    this.props.fetchFeaturedReviews()
  }

  render() {
    return (
      <div>
        <div className="featured-product-list-container">
          {this.props.featuredList.map(product => {
            return <SingleProductCard key={product.id} product={product} />
          })}
        </div>

        <div className="review-list-container">
          <h2>OUR CUSTOMERS SAY</h2>
          {this.props.featuredReviews.map(review => {
            return <SingleReviewCard key={review.id} review={review} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    featuredList: state.product.featuredProducts,
    featuredReviews: state.review.featuredReviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFeaturedProducts: () => dispatch(fetchFeaturedProducts()),
    fetchFeaturedReviews: () => dispatch(fetchFeaturedReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
