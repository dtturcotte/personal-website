import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

import Home from './components/Home'
import Work from './components/Work'

function Routing() {
	const { pathname } = useLocation()
	return (
		<>
			<Header pathname={pathname} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
			</Routes>
			<Footer />
		</>
	)
}

function App() {
	return (
		<div className="App">
			<Router>
				<Routing />
			</Router>
		</div>
	)
}

export default App
