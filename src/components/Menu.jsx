import React from 'react'
import {Link} from 'react-router-dom'

const data = [
	{url: '/',description: "Inicio"},
	{url:'/login',description:"Admin"},
	{url:'/admin',description:"Login"}
]

const Menu = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-blue">
				<ul className="navbar-nav mr-auto">
					{
						data.map((item) => (
							<li className="nav-item">
								<Link className="nav-link" key={item.url} to={item.url}>{item.description}</Link>
							</li>

						))
					}
				</ul>
			</nav>
		</div>
	)
}

export default Menu
