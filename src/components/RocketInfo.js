import React, { Component } from 'react'
import Item from './Item'

export default class RocketInfo extends Component {
  render () {
    return (
      <ul style={{margin: 0, padding: 0}}>
        {this.props.data.map((rocket, key) => {
          return <Item source={rocket} key={key} />
        })}
      </ul>
    )
  }
}
