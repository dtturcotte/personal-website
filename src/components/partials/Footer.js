import React from 'react'

import '../../scss/footer.scss'

class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="footer">
				<div className="content">
					<div className="footer-content">
						<div className="clear"></div>
						<p className="muted">Copyright © 2023 Daniel Turcotte</p>
						<div className="footer-logos">
							<a href="https://github.com/dtturcotte" target="_blank">
								<img src="../../assets/contact/github_footer.png" />
							</a>
							<a href="https://www.linkedin.com/in/daniel-turcotte-40566817" target="_blank">
								<img src="../../assets/contact/linkedin.png" />
							</a>
							<a href="https://codepen.io/collection/wapvya" target="_blank">
								<img src="../../assets/contact/codepen.png" />
							</a>
						</div>
						<div className="react">
							<p className="muted">Made with</p>
							<img src="../../assets/tags/react.png" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
