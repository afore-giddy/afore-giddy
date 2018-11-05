import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  fetchAllProducts
} from '../../store'

class EditProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    return (
      <div className="product-list-container">
        <h2>Edit Products</h2>
        {this.props.match}
      </div>
    )
  }
}
