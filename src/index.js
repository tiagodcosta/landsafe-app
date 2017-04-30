import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Main } from './components/Main'
import { Home } from './components/Home'
import { AlertContainer } from './components/Alert'
window.React = React

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="alert" component={AlertContainer} />
		</Route>
	</Router>,
	document.getElementById('main-app')
	)