import React, { Component } from 'react'
import Theme from '../Theme'
import icon from '../assets/pad.png'

export default class Item extends Component {

  render () {
    const date = new Date(this.props.source.net)
    const locale = 'en-us'
    const month = date.toLocaleString(locale, { month: 'long' })
    return (
      <li style={{
        background: '#fff',
        listStyle: 'none',
        padding: 8,
        margin: 4,
        borderRadius: Theme.BORDER.RADIUS,
        display: 'flex',
        userSelect: 'none'
      }}>
        <div style={styles.icon}>
          <img src={icon} alt='pad' height={48} />
        </div>
        <div style={styles.body}>
          <p style={styles.title}> {this.props.source.name} </p>
          <p style={styles.location}> {this.props.source.pad.location.name} </p>
        </div>
        <div style={styles.date}>
          <p style={{margin: 0}}>{month}</p>
          <p style={{margin: 0}}>{date.getDate()}</p>
        </div>
      </li>
    )
  }
}

const styles = {
  title: {
    margin: 0,
    padding: 0
  },
  body: {
    width: '100%',
    padding: 8
  },
  location: {
    margin: 0,
    padding: 0,
    fontSize: 12,
    color: '#444'
  },
  date: {
    minWidth: 64,
    minHeight: 64,
    maxWidth: 64,
    maxHeight: 64,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    margin: 0,
    padding: 0
  },
  icon: {
    minWidth: 64,
    minHeight: 64,
    maxWidth: 64,
    maxHeight: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
