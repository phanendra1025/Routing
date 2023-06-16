// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = props => {
  console.log(props)

  return (
    <nav className="nav-bar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="wave"
          className="logo"
        />
        <p className="app-name">Wave</p>
      </div>
      <ul className="nav-bar-list-container">
        <li>
          <Link className="list-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="list-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="list-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
