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
  }

  render () {
    return (
      <canvas
        id='scene'
        height={600}
        style={{
          background: 'black'
        }} />
    )
  }
}
