import { Routes, Route, Link } from 'react-router-dom';
// import './styles/reset.css';
// import './styles/App.css';
import HomeBody from './components/HomeBody';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CreateGuestForm from './components/CreateGuestForm/CreateGuestForm';

function App() {
	return (
		<section className='main-container'>
			<CreateGuestForm />
			<nav className='nav-container'>
				<div className='logo-container'>
					<h1 className='logo-title'>ZET</h1>
					<Link to='/'>
						{/* <img src={logo} alt='' style={logoStyle} /> */}
					</Link>
				</div>
				<ul className='link-container'>
					<Link to='/link'>
						<li className=''>Link</li>
					</Link>
				</ul>
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/homebody' element={<HomeBody />} />
					<Route path='/link' element={<Link />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
