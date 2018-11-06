import React from 'react'

class UserForm extends React.Component {
  render() {
    return (
      <div>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label>First Name</label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='firstName'
                value={this.props.firstName} />
            </div>
            <div>
              <label>Last Name</label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='lastName'
                value={this.props.lastName} />
            </div>
            <div>
              <label>Email</label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='email'
                value={this.props.email} />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='phoneNumber'
                value={this.props.phoneNumber} />
            </div>
            <div>
              <label>Address</label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='address'
                value={this.props.address} />
            </div>
            <div>
              <label>Billing Address</label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='billingAddress'
                value={this.props.billingAddress} />
            </div>
            <div>
              <button type='submit' onClick={this.props.handleSubmit}>submit</button>
            </div>
          </form>
      </div>
  )}
}

export default UserForm
