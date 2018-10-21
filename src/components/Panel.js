import React, { Component } from 'react'
import Theme from '../Theme'

export default class Panel extends Component {
  render () {
    return (
      <div style={{
        width: 500,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }}>
        <span style={{
          color: Theme.TEXT.DEFAULT,
          fontSize: 20,
          padding: 8
        }}>{this.props.title}</span>
        {this.props.children}
      </div>
    )
  }
}
