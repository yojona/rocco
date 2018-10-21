import React, { Component } from 'react'
import Store from '../Store'
const WorldWind = window.WorldWind
const renderableLayer = new WorldWind.RenderableLayer()
let wwd

export default class Canvas extends Component {
  componentDidMount () {
    wwd = new WorldWind.WorldWindow('scene')

    wwd.addLayer(new WorldWind.BMNGOneImageLayer())
    wwd.addLayer(new WorldWind.BMNGLayer())
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

  componentWillReceiveProps (newProps) {
    wwd.goTo(new WorldWind.Location(Store.data.latitude, Store.data.longitude))

    Store.data.launches.map(launch => {
      this.createPad(launch.pad.name, launch.pad.latitude, launch.pad.longitude)
    })
  }

  createPad (name, latitude, longitude) {
    var placemarkLayer = new WorldWind.RenderableLayer('Placemark')
    wwd.addLayer(placemarkLayer)
    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null)

    placemarkAttributes.imageOffset = new WorldWind.Offset(
      WorldWind.OFFSET_FRACTION, 0.3,
      WorldWind.OFFSET_FRACTION, 0.0)

    placemarkAttributes.labelAttributes.color = WorldWind.Color.WHITE
    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
      WorldWind.OFFSET_FRACTION, 0.5,
      WorldWind.OFFSET_FRACTION, 1.0)
    var position = new WorldWind.Position(latitude, longitude, 100.0)
    var placemark = new WorldWind.Placemark(position, true, null)
    placemark.label = name
    placemark.alwaysOnTop = true
    placemarkLayer.addRenderable(placemark)
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
