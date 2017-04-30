import React, { Component } from 'react'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css'
import 'react-s-alert/dist/s-alert-css-effects/flip.css'
import 'react-s-alert/dist/s-alert-css-effects/genie.css'
import 'react-s-alert/dist/s-alert-css-effects/jelly.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'


export class AlertContainer extends Component {
   handleClick(e) {
        e.preventDefault();
        Alert.warning('Test message warning!', {
            position: 'top-right'
        })
    }    
    render() {
    	return (
		<div>
			This Alert page
               <button onClick={this.handleClick}>ALERT!!!</button>
		</div>
		)
	}
}




