import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import { ButtonContainer } from './ButtonContainer'
import { Geolocation } from './Geolocation'
import '../scss/index.scss'

export class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			risk: 0,
		}
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
    	this.setState({risk: event.target.value});
  	}
  	handleSubmit(event) {
    	console.log('Your risk is ' + this.state.risk)
    	event.preventDefault();
  	}
	render() {
		return (
		<div className="home-container">
		<Geolocation />
			<div className="search-container">
		       <form onSubmit={this.handleSubmit}>
		        <label>
		          <p className="search-container__text">Pick up a location</p>
		          <select className="search-container__select" value={this.state.risk} onChange={this.handleChange}>
		            <option value="50">Nova Friburgo</option>
		            <option value="10">Blue Hills</option>
		            <option value="80">Tura</option>
		            <option value="10">Albany County Rail Trail</option>
		            <option value="50">San Francisco</option>
		            <option value="10">Kentucky</option>
		          </select>
		        </label>
		      </form>
			</div>
			<div className="gauge-container">
				<Gauge value={this.state.risk} width={350} height={320} color="#123456" label="How is the risk here?" />
			</div>
			<ButtonContainer />
		</div>
		)
	}
}	



