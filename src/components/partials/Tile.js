import React from 'react'
import { motion } from 'framer-motion'
import '../../scss/global.scss'

function Tile(props) {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={`tile`} onClick={props.tileClick}>
			<div className="info">
				<p className="title">{props.tile.name}</p>
			</div>
			<img className="tile-thumbnail" src={`../assets/tiles/thumbnails/artwork/${props.tile.image}.png`} />
		</motion.div>
	)
}

export default Tile
