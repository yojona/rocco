import React, { Component } from 'react'
import Layout from './components/Layout'
import TopBar from './components/TopBar'
import Section from './components/Section'
import Canvas from './components/Canvas'
import Panel from './components/Panel'
import Workspace from './components/Workspace'

export default class App extends Component {
  componentWillMount () {
    document.body.style.margin = 0
    document.body.style.fontFamily = 'sans-serif'
    this.getUpcomingLaunches()
  }

  async getUpcomingLaunches () {
    let launches = await window.fetch('https://spacelaunchnow.me/3.2.0/launch/upcoming/?format=json')
    launches = await launches.json()
    console.log(launches)
  }
  render () {
    return (
      <Layout>
        <TopBar>
          <Section title='Rocco' />
        </TopBar>
        <Workspace>
          <Panel />
          <Canvas />
        </Workspace>
      </Layout>
    )
  }
}
