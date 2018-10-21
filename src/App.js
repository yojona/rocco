import React, { Component } from 'react'
import Layout from './components/Layout'
import TopBar from './components/TopBar'
import Section from './components/Section'
import Canvas from './components/Canvas'
import Panel from './components/Panel'
import Workspace from './components/Workspace'
import Store from './Store'
import RocketInfo from './components/RocketInfo'

export default class App extends Component {
  componentWillMount () {
    document.body.style.margin = 0
    document.body.style.fontFamily = 'sans-serif'
    Store.link(this)
    this.getUpcomingLaunches()
  }

  async getUpcomingLaunches () {
    let data = await window.fetch('https://spacelaunchnow.me/3.2.0/launch/upcoming/?format=json&limit=10000')
    data = await data.json()
    Store.setState({launches: data.results})
  }
  render () {
    return (
      <Layout>
        <TopBar>
          <Section title='Rocco' />
        </TopBar>
        <Workspace>
          <Panel title='Upcoming launches'>
            <RocketInfo data={Store.data.launches} />
          </Panel>
          <Canvas />
        </Workspace>
      </Layout>
    )
  }
}
