import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Error404 } from './components/Error404'
import { Main } from './components/Main'


render (
	<Router history={browserHistory}>
		<Route path="/" component={Main} />
		<Route path="alert" component={Main} />
		<Route path="details" component={Main} />
		<Route path="*" component={Error404} />
	</Router>,
	document.getElementById('main-app')
)