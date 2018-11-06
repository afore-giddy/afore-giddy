import React, {Component} from 'react'
import {Button, Card, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'

export default class SingleOrder extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('HUHUHUHUHUHUHUHUHUH', this.props)
    const {total, status} = this.props.order
    return (
      <div>
        <Card>
          {total}
          {status}
        </Card>
      </div>
    )
  }
}
