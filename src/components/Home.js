import React from 'react'
import '../scss/global.scss'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEmbedSpotify: false,
		}
	}

	embedSpotify() {
		this.setState({
			isEmbedSpotify: true,
		})
	}

	render() {
		return (
			<div className="page">
				<div className="container dark h-sm">
					<div className="half">
						<div className="content">
							<p className="heading home">
								Welcome! I am a full stack developer. I've created a{' '}
								<a className="dark" href="https://ies.ed.gov/funding/grantsearch/details.asp?ID=4575" target="_blank">
									grant-winning educational game
								</a>
								, and enjoy art and languages.
							</p>
						</div>
					</div>
					<div className="half">
						<div className="overlay gradient"></div>
						<img style={{ width: '100%', position: 'absolute', bottom: '0px' }} src="../assets/shanghai.jpg" />
					</div>
				</div>
				<div className="container p-lg monospace">
					<div className="content center">
						<p className="heading" style={{ display: 'inline-block' }}>
							run C:/Turcotte/hobbies.exe<span className="blink_me"></span>
						</p>

						<div className="code-block">
							<pre>
								<code>
									do &#123;
									<div>
										<img src="../assets/skateboard.png" />
										<span>.radManeuver();</span>
									</div>
									<div>
										<img src="../assets/ski.png" />
										<span>.yardSale();</span>
									</div>
									<div>
										<img src="../assets/brush.png" />
										<span>.happyAccident();</span>
									</div>
									&#125; while (!coding);
								</code>
							</pre>
						</div>
					</div>
				</div>
				<div className="container blue p-xsm">
					<div className="content center">
						<p className="heading">Musical Interests</p>
						<img className="spotify" onClick={() => this.embedSpotify()} src="../assets/headphones.png" />
						{this.state.isEmbedSpotify && (
							<iframe
								src="https://embed.spotify.com/?uri=spotify%3Aartist%3A0WwSkZ7LtFUFjGjMZBMt6T"
								style={{ margin: '30px 0' }}
								width="300"
								height="380"
								frameBorder="0"
								allowtransparency="true"
							></iframe>
						)}
					</div>
				</div>
				<div className="container black p-lg">
					<div className="content center">
						<div className="content-blocks left-image" style={{ marginBottom: '0px' }}>
							<div className="content-block left" style={{ boxShadow: 'none' }}>
								<a href="https://www.youtube.com/watch?v=8Pa9x9fZBtY" target="_blank">
									<img className="guess-who" src="../assets/guess_who.png" />
								</a>
							</div>
							<div className="content-block right">
								<p>Mark Knopfler is my favorite musician, so I painted this and sent it to him.</p>
								<p>I didn't hear back, but I'm sure he hung it up somewhere special.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container chinese-image h-m">
					<div className="overlay no-dark">
						<div className="content">
							<a className="light" target="_blank" href="http://hittingtreeswithsticks.com/?action=viewimage&site=artwork&id=22">
								<h1 style={{ fontSize: '48px', margin: '0px' }}>欢迎</h1>
								<p>Beyond coding and artwork, Chinese language and culture are a driving force in my life.</p>
							</a>
						</div>
					</div>
				</div>
				<div className="container light p-lg">
					<div className="content center">
						<div className="content-blocks left-image">
							<div className="content-block left">
								<img src="../assets/beijing.jpg" />
							</div>
							<div className="content-block right">
								<p>I have been studying Mandarin since 2007 and read and speak the language proficiently.</p>
								<p>
									Pictured here, I was honored to join a group of 20 high schools students through{' '}
									<a href="http://jaconn.org/ja-goes-china/" target="_blank" className="dark">
										Junior Achievement
									</a>
									as their teacher and mentor while they created mock trading companies in Beijing. An experience I will never forget!{' '}
									<a href="http://jainchina.blogspot.com/" target="_blank" style={{ display: 'block' }}>
										<button className="buttons black-border">Read More!</button>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
