import React from 'react'
import { motion } from 'framer-motion'
import '../../scss/global.scss'
import '../../scss/work.scss'

function Project(props) {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={`project`} onClick={props.projectClick}>
			<div className="info">
				<p className="title">{props.project.name}</p>
				<div className="tag-icons">
					{props.tags.map((tag, i) => {
						if (props.project.tags.includes(tag)) {
							return <img className="tag-icon" key={i} src={`../assets/projects/tags/${tag}.png`} />
						}
					})}
				</div>
				<p className="description">{props.project.description1}</p>
				{props.project.description2 && <p className="description">{props.project.description2}</p>}
				{props.project.action && <p className="action">{props.project.action}</p>}
				<div className="github">
					{props.project.github && props.project.github !== 'private' ? (
						<a href={props.project.github} target="_blank">
							<i className="fa-brands fa-github"></i>
						</a>
					) : (
						<>
							<i className="fa-brands fa-github"></i>
							<p>Private Repo - Ask Me</p>
						</>
					)}
				</div>
			</div>
			<img className="project-thumbnail" src={`../assets/projects/thumbnails/${props.project.image}.png`} />
		</motion.div>
	)
}

export default Project
