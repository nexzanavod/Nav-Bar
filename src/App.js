import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';


import { GiHamburgerMenu } from 'react-icons/gi';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>

      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>

        <Navbar show={showNav} />

        <div className='main'>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={true} component={About} />
        </div>

      </Router>

    </>
  );
}

export default App;
