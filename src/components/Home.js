import React from 'react'
import ImagesModal from './ui/ImagesModal'

import Tile from './partials/Tile'

import '../scss/global.scss'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEmbedSpotify: false,
			activeTags: [],
			tags: ['acrylic on canvas', 'sketch', 'digitally hand-drawn', '3D', 'vector', 'progression'],
			tiles: [
				{
					name: `Lois Circle`,
					image: 'Lois Circle',
					description1: `Feb '22`,
					tags: ['acrylic on canvas'],
				},
				{
					name: `Jaz`,
					image: 'Jaz',
					description1: `Sep '22, Mom's Birthday Gift of Her Favorite Dog`,
					tags: ['acrylic on canvas'],
				},
				{
					name: `Money For Nothin`,
					image: 'Money For Nothin',
					description1: `My favorite artist: Mark Knopfler of Dire Straits.`,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Alternate Reality`,
					image: 'Alternate Reality',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `In the Moment`,
					image: 'In the Moment',
					description1: `Dec '14`,
					tags: ['acrylic on canvas'],
				},
				{
					name: `South Beach`,
					image: 'South Beach',
					description1: `May '13`,
					tags: ['acrylic on canvas'],
				},
				{
					name: `Battery Park`,
					image: 'Battery Park',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Thai Elephants`,
					image: 'Thai Elephants',
					description1: `May '22, my sister's wedding gift`,
					tags: ['acrylic on canvas'],
				},
				{
					name: `Cliffs of Portugal`,
					image: 'Cliffs of Portugal',
					description1: `May '22, my sister's wedding gift`,
					tags: ['acrylic on canvas'],
				},
				{
					name: `Alchemy Live`,
					image: 'Alchemy Live',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Laura`,
					image: 'Laura',
					description1: `Good friend of mine from childhood`,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Kid Buu`,
					image: 'Kid Buu',
					description1: `3D Studio Max`,
					tags: ['3D'],
				},
				{
					name: `Celebrity Jeopardy`,
					image: 'Celebrity Jeopardy',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Brolly`,
					image: 'Brolly',
					description1: `3D Studio Max`,
					tags: ['3D'],
				},
				{
					name: `Cardboard Chap`,
					image: 'Cardboard Chap',
					description1: ``,
					tags: ['sketch'],
				},
				{
					name: `Coast with Me`,
					image: 'Coast with Me',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Fifty Fifty`,
					image: 'Fifty Fifty',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Bulma`,
					image: 'Bulma',
					description1: ``,
					tags: ['3D'],
				},
				{
					name: `Jing Ju`,
					image: 'Jing Ju',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Modern Measures`,
					image: 'Modern Measures',
					description1: ``,
					tags: ['vector'],
				},
				{
					name: `Snack Break`,
					image: 'Snack Break',
					description1: `Feb '22`,
					tags: ['sketch'],
				},
				{
					name: `Tom Yum Goong`,
					image: 'Tom Yum Goong',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Ye Qu`,
					image: 'Ye Qu',
					description1: ``,
					tags: ['digitally hand-drawn'],
				},
				{
					name: `Sketch Comp`,
					image: 'Sketch Comp',
					description1: ``,
					tags: ['sketch'],
				},
				{
					name: `Shawnei`,
					image: 'Shawnei',
					description1: `Friend of mine`,
					tags: ['vector'],
				},
				{
					name: `Reference Comp`,
					image: 'Reference Comp',
					description1: ``,
					tags: ['sketch'],
				},
				{
					name: `Goron`,
					image: 'Goron',
					description1: ``,
					tags: ['3D'],
				},
				{
					name: `Dodge This`,
					image: 'Dodge This',
					description1: ``,
					tags: ['3D'],
				},
				{
					name: `AL Process`,
					image: 'AL Process',
					description1: ``,
					tags: ['progression'],
				},
				{
					name: `MfN Process`,
					image: 'MfN Process',
					description1: ``,
					tags: ['progression'],
				},
				{
					name: `AR Process`,
					image: 'AR Process',
					description1: ``,
					tags: ['progression'],
				},
				{
					name: `BP Process`,
					image: 'BP Process',
					description1: ``,
					tags: ['progression'],
				},
				{
					name: `ItM Process`,
					image: 'ItM Process',
					description1: ``,
					tags: ['progression'],
				},
				{
					name: `L Process`,
					image: 'L Process',
					description1: ``,
					tags: ['progression'],
				},
				{
					name: `MM Process`,
					image: 'MM Process',
					description1: ``,
					tags: ['progression'],
				},
				{
					name: `SB Process`,
					image: 'SB Process',
					description1: ``,
					tags: ['progression'],
				},
			],
			modalOpen: false,
			selectedTile: null,
			tilesToShow: 12,
			tilesToShowMax: 12,
		}
	}

	componentDidMount() {}

	componentWillMount() {}

	toggleMoreTiles() {
		let length = this.state.tilesToShow > this.state.tilesToShowMax ? this.state.tilesToShowMax : this.state.tiles.length
		this.setState({
			tilesToShow: length,
		})
	}

	tagClick(tag) {
		let tags = [...this.state.activeTags]
		if (tags.includes(tag)) {
			tags = tags.filter((t) => t !== tag)
		} else {
			tags.push(tag)
		}

		this.setState({
			activeTags: tags,
		})
	}

	tileClick(tile) {
		if (!tile) {
			return
		}

		this.setState({
			modalOpen: true,
			selectedTile: tile,
		})
	}

	closeModal() {
		this.setState({
			modalOpen: false,
		})
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
						<img style={{ width: '100%', position: 'absolute', bottom: '0px' }} src="../assets/site/shanghai.jpg" />
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
										<img src="../assets/site/skateboard.png" />
										<span>.radManeuver();</span>
									</div>
									<div>
										<img src="../assets/site/ski.png" />
										<span>.yardSale();</span>
									</div>
									<div>
										<img src="../assets/site/brush.png" />
										<span>.happyAccident();</span>
									</div>
									&#125; while (!coding);
								</code>
							</pre>
						</div>
					</div>
				</div>
				<div className="container purple p-lg">
					<div className="content">
						<p className="heading center">Selected Artwork</p>
						<div className="tags">
							{this.state.tags.map((tag, index) => {
								return (
									<div className={`tag tile-tag ${this.state.activeTags.find((t) => t === tag) ? 'active' : ''}`} key={index} onClick={() => this.tagClick(tag)}>
										<img className="tag-icon" src={`../assets/tiles/tags/artwork/${tag}.png`} />
										<span>{tag}</span>
									</div>
								)
							})}
						</div>
						<div className="tiles">
							{this.state.tiles.map((tile, index) => {
								let matchingTags = tile.tags.filter((tag) => this.state.activeTags.includes(tag))
								if ((this.state.activeTags.length > 0 && matchingTags.length > 0) || (this.state.activeTags.length <= 0 && index < this.state.tilesToShow)) {
									return <Tile tile={tile} key={index} tags={this.state.tags} tileClick={() => this.tileClick(tile)} />
								}
							})}
						</div>
						<button onClick={() => this.toggleMoreTiles()} className="buttons large white-border center margin-top small">
							Show {this.state.tilesToShow > this.state.tilesToShowMax ? 'Less' : 'More'}
						</button>
					</div>
					{this.state.selectedTile && <ImagesModal isOpen={this.state.modalOpen} close={this.closeModal.bind(this)} item={this.state.selectedTile} type="artwork" />}
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
								<img src="../assets/site/beijing.jpg" />
							</div>
							<div className="content-block right">
								<p>
									I have been studying Mandarin since 2007 and read and speak the language proficiently. Check out my{' '}
									<a className="dark" target="_blank" href="http://tao-dan.blogspot.com/" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
										Chinese Blog
									</a>{' '}
									where I wrote stories in Chinese for practice.
								</p>
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
				{/* <div className="container white p-xsm">
					<div className="content center">
						<p className="heading">Musical Interests</p>
						<img className="spotify" onClick={() => this.embedSpotify()} src="../assets/site/headphones.png" />
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
				<div className="container light-to-dark-gradient p-lg">
					<div className="content center">
						<div className="content-blocks left-image" style={{ marginBottom: '0px' }}>
							<div className="content-block left" style={{ boxShadow: 'none' }}>
								<a href="https://www.youtube.com/watch?v=8Pa9x9fZBtY" target="_blank">
									<img className="guess-who" src="../assets/site/guess_who.png" />
								</a>
							</div>
							<div className="content-block right">
								<p>Mark Knopfler is my favorite musician, so I painted this and sent it to him.</p>
								<p>I didn't hear back, but I'm sure he hung it up somewhere special.</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		)
	}
}

export default Home
