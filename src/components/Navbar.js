import React from 'react'
import { Link } from 'react-router'

export const Navbar = () =>
	<div className="header">
		<Link className="header__logo-link" to="/"><p className="header__logo">Landsafe</p></Link>
		<p>v1.0.0</p>
	</div>	