import React from 'react'

import '../../scss/global.scss'
import '../../scss/work.scss'

function Game(props) {
	return (
		<>
			<div id="game-section" className="container game-image h-m">
				<div className="overlay game">
					<div className="content">
						<h1>
							<i>Spywatch Lex</i>
						</h1>
						<p>A game before anything else, with language learning at its core.</p>
						<a href="https://ies.ed.gov/funding/grantsearch/details.asp?ID=4575" target="_blank">
							<img className="sbir" src="../assets/site/sbir_logo.png" />
						</a>
					</div>
				</div>
			</div>
			<div className="container light p-sm">
				<div className="content center">
					<div className="content-blocks" style={{ marginBottom: '25px' }}>
						<div className="content sm">
							<p className="subheading">
								<i>Spywatch Lex</i> is a federal{' '}
								<a className="dark" href="https://ies.ed.gov/funding/grantsearch/details.asp?ID=4575" target="_blank" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
									Small Business Innovation Research (SBIR) grant-winning
								</a>{' '}
								video game designed to make language learning more engaging and effective.{' '}
								{/* <a href="https://spywatchlex.com" target="_blank" className="dark" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
									Try It!
								</a> */}
								<a href="mailto:dan@scholarcade.com" target="_blank" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
									Email me to try it!
								</a>
							</p>
						</div>
						<iframe
							// width="560"
							// height="315"
							className="youtube-video"
							src="https://www.youtube.com/embed/xdyMsiUXF8Q"
							title="Spywatch Lex"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							style={{ marginBottom: '20px' }}
						></iframe>
						<hr />
					</div>
					{props.showMoreGame && (
						<>
							<div className="content-blocks left-image">
								<div className="content-block left">
									<img src="../assets/site/in_game.png" />
								</div>
								<div className="content-block right">
									<p>
										While immersed in a spy storyline, the student uses the underlying language instruction system to solve game challenges which allows them to progress to new
										quests and new levels. Each level has several quests, which each contain several characters with challenges to solve.
									</p>
								</div>
							</div>
							<div className="content-blocks right-image">
								<div className="content-block right">
									<img src="../assets/site/beta_test_1.jpg" />
								</div>
								<div className="content-block left">
									<p>
										<i>Spywatch Lex</i> has been pilot tested and used by several schools across the country.
									</p>
									<p>Most recently, as part of the SBIR grant initiative, the game was piloted at four schools within the New Haven public school district.</p>
									<p>Students enjoyed playing and learning Spanish while teachers used the analytics dashboard to gauge progress.</p>
								</div>
							</div>
							<div className="content-blocks left-image">
								<div className="content-block left">
									<img src="../assets/site/beta_test_2.jpg" />
								</div>
								<div className="content-block right">
									<p>
										Developing <i>Spywatch Lex</i> has been an amazing experience that taught me about iterative design, validation, and usability testing.
									</p>
									<a href="mailto:dan@scholarcade.com" target="_blank" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
										<b>Email me to try it!</b>
									</a>
									{/* <a href="https://spywatchlex.com" target="_blank">
										<button className="buttons black-border">Try It!</button>
									</a> */}
								</div>
							</div>
						</>
					)}
					<button onClick={() => props.onClick()} className="buttons large black-border center">
						{props.showMoreGame ? 'Hide' : 'Learn More'}
					</button>
				</div>
			</div>
		</>
	)
}

export default Game
