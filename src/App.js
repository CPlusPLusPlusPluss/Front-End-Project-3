import { Routes, Route, Link } from 'react-router-dom';
import './styles/reset.css';
import './styles/App.css';

function App() {
  const logoStyle = {
    width: 6 + "vmax",
    height: "auto",
    padding: 10 + "px",
  };
  return (
    <section className="main-container">
      <nav className="nav-container">
        <div className="logo-container">
          <h1 className="logo-title">ZET</h1>
          <Link to='/'>
            <img src={logo} alt='' style={logoStyle} />
          </Link>
        </div>
        <ul className="link-container">
          <Link to='/library'>
            <li className="">Earth Library</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/picperday' element={<PicPerDay />} /> */}
          {/* <Route path='/library' element={<Library />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </main>
    </section>
  );
};

export default App;
