import React, { Component } from 'react'
import styled from 'styled-components'
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")
mapboxgl.accessToken = "pk.eyJ1IjoicHJrciIsImEiOiJjajhva3U1NHowNDlyMnhvMDRyOHlhaXpyIn0.OaV3cGWgNo2uze1RYA4Pxg"

const MapWrapper = styled.div`
height: 220px;
width: 220px;
position: relative
`

class MapContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			lng: props.lng || 5,
			lat: props.lat || 34,
			zoom: props.zoom || 15,
		}
	}

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/prkr/ck6zhz5880zux1ilej2p9nzsz",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })

    map.on("load", () => {
      /* Image: An image is loaded and added to the map. */
      map.loadImage("/icon-marker.png", (error, image) => {
        if (error) throw error
        map.addImage("custom-marker", image)
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: "markers",
          type: "symbol",
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [this.state.lng, this.state.lat],
                  },
                },
              ],
            },
          },
          layout: {
            "icon-image": "custom-marker",
          },
        })
      })
    })
	}
	
  render() {		
    return (
      <MapWrapper>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%",
          }}
          ref={el => (this.mapContainer = el)}
        />
      </MapWrapper>
    )
  }
}

export default MapContainer