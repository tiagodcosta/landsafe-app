import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import { ButtonContainer } from './ButtonContainer'
import '../scss/index.scss'

export const Home = (props) =>
	<div className="home-container">
		<div className="gauge-container">
			<Gauge value={0.2} width={400} height={320} label="How is the risk here?" />
		</div>
			<ButtonContainer />
	</div>
	



