import React from 'react'
import Packery from 'packery'

import '../../scss/global.scss'
import '../../scss/isotope.scss'

var $ = require('jquery')

var layouts = ['grid-item', 'grid-item grid-item--width2 grid-item--height2']

class Collage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			artwork: [],
		}
	}

	async getHTWS() {
		var htws = {
			url: 'http://hittingtreeswithsticks.com/?action=personalpage',
			art_limit: 43, // limit return
			comics_limit: 75, // limit return
			max_width: 100, // specify image width in px
			max_height: 100, // specify image height in px
			site: 'artwork', // artwork or comics
		}

		let url = htws.url + '&limit=' + htws.art_limit + '&mw=' + htws.max_width + '&mh=' + htws.max_height + '&site=' + htws.site + '&callback=?'
		let artwork = await $.getJSON(url)

		this.setState({
			artwork: artwork.fullpath,
		})

		var grid = document.querySelector('.grid')
		let pack = new Packery(grid, {
			itemSelector: '.grid-item',
			layoutMode: 'packery',
		})

		setTimeout(() => {
			pack.layout()
		}, 100)
	}

	componentDidMount() {
		this.getHTWS()
	}

	componentWillMount() {}

	render() {
		return (
			<div className="grid">
				{this.state.artwork.map((art, index) => {
					var rand = Math.floor(Math.random() * layouts.length)
					return <div key={index} className={`grid-item ${layouts[rand]}`} dangerouslySetInnerHTML={{ __html: art }}></div>
				})}
			</div>
		)
	}
}

export default Collage
