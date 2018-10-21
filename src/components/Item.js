import React, { Component } from 'react'
import Theme from '../Theme'
import icon from '../assets/pad.png'
import Store from '../Store';

export default class Item extends Component {
  state = {
    countdown: ''
  }
  constructor () {
    super()
 
    setInterval(() => {
      const countdown = this.getTimeRemaining(this.props.source.net)
      this.setState({countdown})
    }, 1000)
  }

  getTimeRemaining (endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor((t / 1000) % 60)
    const minutes = Math.floor((t / 1000 / 60) % 60)
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    const days = Math.floor(t / (1000 * 60 * 60 * 24))
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

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
      }}
        onClick={(e) => {
          Store.setState({
            latitude: this.props.source.pad.latitude,
            longitude: this.props.source.pad.longitude
          })
        }}
      >
        <div style={styles.icon}>
          <img src={icon} alt='pad' height={48} />
        </div>
        <div style={styles.body}>
          <p style={styles.title}> {this.props.source.name} </p>
          <p style={styles.location}> {this.props.source.pad.location.name} </p>
          <p style={styles.countdown}>{this.state.countdown}</p>
        </div>
        <div style={styles.date}>
          <p style={{margin: 0}}>{month}</p>
          <p style={{margin: 0}}>{date.getUTCFullYear()}</p>
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
  },
  countdown: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'green'
  }
}
