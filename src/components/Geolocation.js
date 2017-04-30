import React from 'react'
import { geolocated } from 'react-geolocated'

export class Geolocation extends React.Component {
  render() {
  	console.log(this.props.coords)
    return (
    		<div>
    			{this.props.coords}
    		</div>
    	)
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(Geolocation);	

