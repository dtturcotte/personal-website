import React from 'react'

import '../../scss/header.scss'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nav: [
				{
					display: 'about',
					link: '/',
				},
				{
					display: 'work',
					link: '/work',
				},
			],
		}
	}

	render() {
		return (
			<div className="header">
				<div className="content">
					<div className="header-content">
						<div className="name">
							<a href="/">DANIEL TURCOTTE</a>
						</div>
						<div className="nav-items-container">
							<div className="nav-items">
								{this.state.nav.map((n, index) => {
									return (
										<a className={this.props.pathname === n.link ? 'active' : ''} href={n.link} key={index}>
											{n.display}
										</a>
									)
								})}
								<a href="mailto:dan.t.turcotte@gmail.com">dan.t.turcotte@gmail.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
