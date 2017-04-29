import React from 'react'
import { Link } from 'react-router'

export const Navbar = () =>
	<div className="header">
		<Link className="header__logo-link" to="/"><p className="header__logo">Landsafe</p></Link>
		<ul className="nav-list">
			<li className="nav-list__item"><Link className="nav-list__link" to="/">Home</Link></li>
			<li className="nav-list__item"><Link className="nav-list__link" to="/about">About</Link></li>
			<li className="nav-list__item"><Link className="nav-list__link" to="/contact">Contact</Link></li>
		</ul> 
	</div>	