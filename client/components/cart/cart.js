import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {SingleProductCard} from '../product'

//
export default class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    const cart = localStorage.cart.split('&')

    // console.log('INSIDE THE CART COMPONENT', JSON.parse(cart[0]))
    return (
      // <h3>CART</h3>

      <div>
        <h2>CART</h2>
        {/* {cart.map((item, i) => {
          let parsedItem = JSON.parse(item).id
          return (
            <SingleProductCard key={i} product={parsedItem}>
              {parsedItem}
            </SingleProductCard>
          )
        })} */}
      </div>
    )
  }
}

// const mapStateToProps = state => {}

// const mapDispatchToProps = dispatch => {}

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
