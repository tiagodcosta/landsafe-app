import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Error404 } from './components/Error404'
import { App } from './components/App'

window.React = React

render (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="alert" component={App} />
		<Route path="details" component={App} />
		<Route path="*" component={Error404} />
	</Router>,
	document.getElementById('main-app')
)