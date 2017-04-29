import React from 'react'
import { Navbar } from './Navbar'
import Gauge from 'react-svg-gauge';
import '../scss/index.scss'

export const Main = (props) =>
	<div className="main-container">
	<Navbar />
		<div className="content-container">
			{props.children}
		</div>
	</div>