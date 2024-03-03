import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify'
import awsconfig from './aws-exports'
// import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import Home from './pages/Home';
import About from './pages/About';
import PremiumPage from './pages/PremiumPage';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

Amplify.configure(awsconfig)
function App() {
  return (
    <div className="App">
      <Router>
        <div className='content'>
          <NavLink className='content' exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className='content' exact activeClassName="active" to="/about">About</NavLink>
          <NavLink className='content' exact activeClassName="active" to="/premium">Premium Content</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/premium" element={<PremiumPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
