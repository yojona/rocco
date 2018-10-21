import React, { Component } from 'react'
import Layout from './components/Layout'
import TopBar from './components/TopBar'
import Section from './components/Section'
import Canvas from './components/Canvas'
import ToggleView from './components/ToggleView'

export default class App extends Component {
  componentWillMount () {
    document.body.style.margin = 0
    document.body.style.fontFamily = 'sans-serif'
    // this.getUpcomingLaunches()
  }

  async getUpcomingLaunches () {
    let headers = new window.Headers()
    headers.append('Access-Control-Allow-Origin', '*')
    let launches = await window.fetch('https://spacelaunchnow.me/3.2.0/launch/upcoming/?format=json', {mode: 'cors'})
    launches = await launches.json()
    console.log(launches)
  }
  render () {
    return (
      <Layout>cachescaches
        <TopBar>
          <Section title='Rocco' />
        </TopBar>
        <ToggleView />
        <Canvas />
      </Layout>
    )
  }
}
