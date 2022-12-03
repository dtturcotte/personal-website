import React from 'react'
import ImagesModal from './ui/ImagesModal'
import CodepenModal from './ui/CodepenModal'

import Game from './partials/Game'
import Project from './partials/Project'
import Collage from './partials/Collage'

import '../scss/global.scss'
import '../scss/work.scss'

class Work extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTags: [],
			tags: ['angular', 'react', 'javascript', 'nodejs', 'games', 'iot', 'animations', 'python', 'pandas', 'php', 'laravel'],
			projects: [
				{
					name: 'eCommerce Platform',
					description1: 'High-end eCommerce shopping platform built for ABInBev.',
					description2: 'Includes a responsive frontend order platform, CMS, and integrations with last-mile delivery and text notification systems.',
					action: 'Click to view images.',
					image: 'bottledirect',
					link: null,
					modalType: 'images',
					codepenHashes: [],
					tags: ['client', 'angular', 'nodejs'],
					github: 'private',
					'background-color': '#00b8f1',
					color: 'white',
					images: [
						{
							src: '1',
							content: 'desktop',
							device: 'desktop',
						},
						{
							src: '3',
							content: 'desktop',
							device: 'desktop',
						},
						{
							src: '5',
							content: 'desktop',
							device: 'desktop',
						},
						{
							src: '6',
							content: 'desktop',
							device: 'desktop',
						},
						{
							src: '1',
							content: 'mobile',
							device: 'mobile',
						},
						{
							src: '4',
							content: 'mobile',
							device: 'mobile',
						},
						{
							src: '1',
							content: 'inventory_portal',
							device: 'desktop',
						},
						{
							src: '4',
							content: 'inventory_portal',
							device: 'desktop',
						},
					],
				},
				{
					name: 'Test Prep. Platform',
					description1: 'Sole developer and designer on a team of four to conceptualize and develop a comprehensive dental test prep platform.',
					description2: 'It features an intuitive frontend and full CMS, with an OAuth2-secured API.',
					action: '',
					image: 'dde',
					link: 'https://dynamicdentaledu.com/',
					modalType: null,
					codepenHashes: [],
					tags: ['freelance', 'laravel', 'angular'],
					github: 'private',
					'background-color': '#00b8f1',
					color: 'white',
				},
				{
					name: 'Analytics Dashboard',
					description1: "Fully customized CMS and API to help teachers gauge their students' learning progress.",
					description2: '',
					action: '',
					image: 'spywatchlex_dashboard',
					link: null,
					modalType: 'images',
					codepenHashes: [],
					tags: ['react', 'nodejs'],
					github: 'private',
					'background-color': '#f79f23',
					color: 'white',
					images: [
						{
							src: '1',
							content: 'desktop',
							device: 'desktop',
						},
						{
							src: '2',
							content: 'desktop',
							device: 'desktop',
						},
					],
				},
				{
					name: 'World Language Apps',
					description1: '(Circa 2015) Codepens demonstrating a speech app and a look-ahead dictionary.',
					description2: '',
					action: 'Click to View',
					image: 'speech_api',
					link: 'projects/speech-api',
					modalType: 'codepen',
					codepenHashes: ['RwJejVG', 'RgJgwK'],
					tags: ['javascript'],
					github: 'https://github.com/dtturcotte/demos/tree/master/speech-api',
					'background-color': '#f79f23',
					color: 'white',
				},
				{
					name: 'Alexa Shopping',
					description1: '(Circa 2016) Mock prototype of an online voice-enabled shopping experience that I built for Anheuser-Busch using the Amazon Echo.',
					description2: 'Contact me to set up a demo through https://echosim.io/.',
					action: '',
					image: 'alexa',
					link: 'https://echosim.io/',
					modalType: null,
					codepenHashes: [],
					tags: ['client', 'nodejs', 'iot'],
					github: 'private',
					'background-color': '#00b8f1',
					color: 'white',
				},
				{
					name: 'Viewers to Volunteers',
					description1: 'Frontend developer on a large-contract social media site for CBS which promotes community outreach.',
					description2: 'This project was particularly meaningful for me as volunteerism has played a pivotal role in my life. Ask about it :)',
					action: '',
					image: 'v2v',
					link: 'https://appadvice.com/app/viewers-to-volunteers/1039970774',
					modalType: null,
					codepenHashes: [],
					tags: ['client', 'angular', 'nodejs'],
					github: 'private',
					'background-color': '#deffff',
					color: 'black',
				},
				{
					name: 'Company Site',
					description1: 'Lead developer on Fuzz company website frontend/backend overhaul.',
					description2: '',
					action: '',
					image: 'fuzz',
					link: 'https://fuzzproductions.com/',
					modalType: null,
					codepenHashes: [],
					tags: ['client', 'angular', 'laravel'],
					github: 'private',
					'background-color': '#deffff',
					color: 'black',
				},
				{
					name: 'Rummy',
					description1: '(Circa 2016) Recreated one of my favorite card games with Raphael JS for fun and to demo new tech.',
					description2: 'Features full AI and winning/losing/invalid hand simulations.',
					action: '',
					image: 'rummy',
					link: null,
					modalType: 'codepen',
					codepenHashes: ['gOKdVGQ'],
					tags: ['games', 'javascript', 'animations'],
					github: 'https://github.com/dtturcotte/demos/tree/master/child-rummy-canvas',
					'background-color': '#deffff',
					color: 'black',
				},
				{
					name: 'Interactive Algorithms',
					description1: `A work in progress, I've animated some algorithms to visualize CS concepts and to practice SVG animations.`,
					description2: ``,
					action: 'Click to Try',
					image: 'tree',
					link: null,
					modalType: 'codepen',
					codepenHashes: ['xxzaNqa', 'XWpPvEj', 'JjEmBXz'],
					tags: ['javascript', 'animations'],
					github: 'https://github.com/dtturcotte/demos/tree/master/raphael-js',
					'background-color': '#f79f23',
					color: 'white',
				},
				{
					name: 'Data Engineering',
					description1: `Built robust ETL systems to normalize global sales data using Python Pandas.`,
					description2: `Designed Star schema-based data warehouse to efficiently model and visualize sales data in PowerBI.`,
					action: null,
					image: 'data_engineering',
					link: null,
					modalType: null,
					codepenHashes: [],
					tags: ['python', 'pandas'],
					github: 'private',
					'background-color': '#f79f23',
					color: 'white',
				},
				{
					name: 'Art & Comics Site',
					description1: 'How I got my start into all of this... My baby- a vanilla PHP comics and artwork website.',
					description2: 'I created this in 2012 to share my comics with the world, and gained 45k fans on Facebook.',
					action: '',
					image: 'htws',
					link: 'http://www.hittingtreeswithsticks.com',
					modalType: null,
					codepenHashes: [],
					tags: ['php'],
					github: 'https://github.com/dtturcotte/hittingtreeswithsticks',
					'background-color': '#b83325',
					color: 'white',
				},
				{
					name: 'Alexa-Slack Assistant',
					description1: 'Employees enter commands through Slack which can be communicated through the Amazon Echo.',
					description2: 'Contact me to set up a demo through https://echosim.io/.',
					action: '',
					image: 'alexa',
					link: 'https://github.com/dtturcotte/AlexaSlack',
					modalType: null,
					codepenHashes: [],
					tags: ['nodejs', 'iot'],
					github: 'https://github.com/dtturcotte/AlexaSlack',
					'background-color': '#f79f23',
					color: 'white',
				},
			],
			modalOpen: false,
			selectedProject: null,
			projectsToShow: 9,
			projectsToShowMax: 9,
			showMoreGame: false,
		}
	}

	componentDidMount() {}

	componentWillMount() {}

	toggleMoreGame() {
		this.setState({
			showMoreGame: !this.state.showMoreGame,
		})
	}

	toggleMoreProjects() {
		let length = this.state.projectsToShow > this.state.projectsToShowMax ? this.state.projectsToShowMax : this.state.projects.length
		this.setState({
			projectsToShow: length,
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

	projectClick(project) {
		if (!project) {
			return
		}

		if (project.link && !project.modalType) {
			if (project.link.includes('http')) {
				window.open(project.link, '_blank')
			} else {
				window.open(project.link, '_self')
			}
		}

		this.setState({
			modalOpen: project.modalType != null,
			selectedProject: project,
		})
	}

	closeModal() {
		this.setState({
			modalOpen: false,
		})
	}

	render() {
		return (
			<div className="page">
				<div className="container dark h-sm">
					<div className="packery-container">
						<Collage />
					</div>
					<div className="overlay no-events">
						<div className="content">
							<h1>I build products to delight users.</h1>
							<p className="heading">Test prep platforms, IoT, games, eCommerce, and more.</p>
						</div>
					</div>
				</div>
				<div className="container p-sm">
					<div className="content sm center">
						<p>
							<i style={{ marginRight: '10px' }} className="fa fa-quote-left" aria-hidden="true"></i>
							Dan is a very talented developer who consistently learns new technologies and figures out ingenious ways to use them. In the past few months of working together, in
							addition to building a production ready IoT capability, he built a VR experience, voice translation services, and many other innovative demos. He is a great catch for any
							innovative team.
						</p>
						<p className="recommender">
							–France Roy, CTO | AB-InBev (
							<a target="_blank" href="https://www.linkedin.com/in/daniel-turcotte-40566817">
								<i className="fa-brands fa-linkedin"></i>
							</a>
							)
						</p>
					</div>
				</div>
				<Game onClick={() => this.toggleMoreGame()} showMoreGame={this.state.showMoreGame} />
				<div className="container p-lg">
					<div className="content">
						<div className="tags">
							<p className="heading center">Technologies I work with:</p>
							{this.state.tags.map((tag, index) => {
								return (
									<div className={`tag ${this.state.activeTags.find((t) => t === tag) ? 'active' : ''}`} key={index} onClick={() => this.tagClick(tag)}>
										<img className="tag-icon" src={`../assets/tags/${tag}.png`} />
										<span>{tag}</span>
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div className="container purple p-lg">
					<div className="content">
						<p className="heading center">Selected projects:</p>
						<div className="projects">
							{this.state.projects.map((project, index) => {
								let intersection = project.tags.filter((tag) => this.state.activeTags.includes(tag))
								if (index < this.state.projectsToShow && (this.state.activeTags.length <= 0 || intersection.length > 0)) {
									return <Project project={project} key={index} tags={this.state.tags} projectClick={() => this.projectClick(project)} />
								}
							})}
						</div>
						<button onClick={() => this.toggleMoreProjects()} className="buttons large white-border center margin-top small">
							Show {this.state.projectsToShow > this.state.projectsToShowMax ? 'Less' : 'More'}
						</button>
					</div>
					{this.state.selectedProject && this.state.selectedProject.modalType === 'codepen' && (
						<CodepenModal isOpen={this.state.modalOpen} close={this.closeModal.bind(this)} project={this.state.selectedProject} />
					)}
					{this.state.selectedProject && this.state.selectedProject.modalType === 'images' && (
						<ImagesModal isOpen={this.state.modalOpen} close={this.closeModal.bind(this)} project={this.state.selectedProject} />
					)}
				</div>
			</div>
		)
	}
}

export default Work
