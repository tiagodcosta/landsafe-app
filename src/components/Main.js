import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { geolocated } from 'react-geolocated';
import '../scss/index.scss'

export const Main = (props) =>
	<div className="main-container">
	<Geolocation />
	<Navbar />
		<div className="content-container">
			{props.children}
		</div>
		<Footer />	
	</div>



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