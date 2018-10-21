import React, { Component } from 'react'
const WorldWind = window.WorldWind
let wwd

export default class Canvas extends Component {
  componentDidMount () {
    wwd = new WorldWind.WorldWindow('scene')

    wwd.addLayer(new WorldWind.BMNGOneImageLayer())
    wwd.addLayer(new WorldWind.BMNGLandsatLayer())

    const renderableLayer = new WorldWind.RenderableLayer()
    wwd.addLayer(renderableLayer)

    // Visual Effects
    var atmosphereLayer = new WorldWind.AtmosphereLayer()
    var starFieldLayer = new WorldWind.StarFieldLayer()
    wwd.addLayer(starFieldLayer)
    wwd.addLayer(atmosphereLayer)
    starFieldLayer.time = new Date()
    atmosphereLayer.lightLocation = WorldWind.SunPosition.getAsGeographicLocation(starFieldLayer.time)
    wwd.navigator.range = 25000000
  }

  render () {
    return (
      <canvas
        id='scene'
        style={{
          background: `radial-gradient(
            #220b2a,
            #0d0116)`,
          width: '100%'
        }} />
    )
  }
}
