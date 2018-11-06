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

      // <div>
      //   <div className="single-product-card-container">
      //     <img src={imageArray[0][color]} />
      //   </div>
      //   <h2>{make}</h2>
      //   <h2>{color}</h2>
      //   <h2>{price}</h2>
      //   <h2>{quantity}</h2>
      //   <button onClick={() => handleRemove(cartId)} type="submit">
      //     REMOVE FROM CART
      //   </button>
      // </div>
    )
  }
}

export default CartCard

// <Card>
//     <Card.Content>
//       <Image floated='right' size='mini' src={imageArray[0][color]} />
//       <Card.Header>{make}</Card.Header>
//       <Card.Meta>{color}</Card.Meta>
//       <Card.Description>
//         Steve wants to add you to the group <strong>best friends</strong>
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <div className='ui two buttons'>
//         <Button basic color='green'>
//           Approve
//         </Button>
//         <Button onClick={() => handleRemove(cartId)} basic color='red'>
//          REMOVE FROM CART
//         </Button>
//       </div>
//     </Card.Content>
//   </Card>
