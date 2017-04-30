import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import { ButtonContainer } from './ButtonContainer'
import { SearchBox } from './SearchBox'
import '../scss/index.scss'

export class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			risk: 30
		}
	}
	highRisk() {
		this.setState({
			risk: 80
		})
	}
	lowRisk() {
		this.setState({
			risk: 10
		})
	}
	mediumRisk() {
		this.setState({
			risk: 40
		})
	}
	render() {
		return (
		<div className="home-container">
			<SearchBox />
			<div className="gauge-container">
				<Gauge value={this.state.risk} width={350} height={320} color="#123456" label="How is the risk here?" />
			</div>
				<button onClick={this.lowRisk.bind(this)}>low</button>
				<button onClick={this.mediumRisk.bind(this)}>Medium</button>
				<button onClick={this.highRisk.bind(this)}>High</button>
			<ButtonContainer />
		</div>
		)
	}
}	



