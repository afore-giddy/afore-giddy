import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Card, Image} from 'semantic-ui-react'

class CartCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {color, imageArray, make, price, quantity} = this.props.state
    const {cartId, handleRemove} = this.props
    return (
      <div>
        <Card>
          <Fragment>
            <Card.Content>
              <Image
                floated="right"
                src={imageArray[0][color]}
                rounded
                bordered
              />
              <Card.Header>{make}</Card.Header>
              <Card.Meta>{color}</Card.Meta>
              <Card.Description>
                <strong>${price}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {/* <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button> */}
              <Button onClick={() => handleRemove(cartId)} inverted color="red">
                REMOVE FROM CART
              </Button>
              {/* </div> */}
            </Card.Content>
          </Fragment>
        </Card>
      </div>
    )
  }
}

export default CartCard
