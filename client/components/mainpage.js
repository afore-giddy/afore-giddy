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
import { Grid, Menu } from 'semantic-ui-react'

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
        <Grid padded centered>
          <Grid.Row container columns={3}>
            {this.props.featuredList.map(product => {
              return <Grid.Column width={4}><SingleProductCard key={product.id} product={product} /></Grid.Column>
            })}
          </Grid.Row>

         <h2>OUR CUSTOMERS SAY:</h2>
          <Grid.Row container columns={3}>
            {this.props.featuredReviews.map(review => {
              return <Grid.Column width={4}><SingleReviewCard key={review.id} review={review} /></Grid.Column>
            })}
          </Grid.Row>
        </Grid>
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
