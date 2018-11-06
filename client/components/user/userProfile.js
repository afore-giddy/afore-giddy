import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me} from '../../store'
import UserForm from './userForm'
import {editUserInfo} from '../../store'

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
    console.log('JOJFLAFLKJDHFLKJH', this.props.user.id)
    return (
      <div>
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
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editUser: (user, id) => dispatch(editUserInfo(user, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
