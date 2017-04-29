import React from 'react'
import { browserHistory } from 'react-router'

export class Link extends React.Component {
	render() {
		return (
				<span onClick={this.changeURL.bind(this)}>
					{this.props.children}
				</span>
			)
		}
	changeURL() {
		browserHistory.push(this.props.href)
	}	
}

export const ButtonContainer = () =>
		<div className="button-container">
		<Link href={'/details'}>
			<button className="button-home">Check details</button>
		</Link>
		<Link href={'/alert'}>			
			<button className="button-home button-home--alert">Alert friends</button>
		</Link>	
		</div>