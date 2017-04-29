import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Gauge from 'react-svg-gauge';
import { Geolocation } from './Geolocation'
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