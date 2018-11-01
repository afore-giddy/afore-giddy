import React, {Component, Fragment, Button, Row} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartCard from './cart-card'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h3>SHOPPING CART</h3>
      // <Button>X</Button>
      // <Button> CONTINUE SHOPPING </Button>
      // <Button>CHECKOUT > </Button>
    )
  }
}

// const mapStateToProps = state => {}

// const mapDispatchToProps = dispatch => {}

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
export default Cart
