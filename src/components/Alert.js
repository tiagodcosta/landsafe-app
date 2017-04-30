import React, { Component } from 'react'
import Alert from 'react-s-alert'
import '../scss/index.scss'

export class AlertContainer extends Component {
	 handleClick(e) {
        e.preventDefault();
     	console.log('Alert sent')
        Alert.warning('<h1>Test message 1</h1>', {
            position: 'bottom-right',
            effect: 'slide',
            onShow: function () {
                console.log('aye!')
            },
            beep: false,
            timeout: 'none',
            offset: 100
        });
    }
    render() {
    	return (
		<div>
			This Alert page
			<button onClick={this.handleClick.bind(this)}>alert</button>     
		</div>
		)
	}
}
