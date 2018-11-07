import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me, getOrderByUser} from '../../store'
import UserForm from './userForm'
import {editUserInfo} from '../../store'
import SingleOrder from './single-order'
import {Button, Card, Header} from 'semantic-ui-react'

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      billingAddress: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getOrderByUser(this.props.user)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.editUser(this.state, this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    const {orders} = this.props
    return (
      <div>
        <Header
          as="h2"
          content="Account Settings"
          subheader="A list of your Orders"
        />
        {orders ? (
          orders.map(item => <SingleOrder key={item.id} order={item} />)
        ) : (
          <h3>YOU HAVE NO ORDERS</h3>
        )}
        <h2>User Profile</h2>
        <UserForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstName={this.firstName}
          lastName={this.lastName}
          email={this.email}
          phoneNumber={this.phoneNumber}
          address={this.address}
          billingAddress={this.billingAddress}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    orders: state.order.allOrders
  }
}
const mapDispatchToProps = {getOrderByUser, editUserInfo}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
