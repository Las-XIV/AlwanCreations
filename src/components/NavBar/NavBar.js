import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import'../../theme/style/navbar.css'
import logo from '../../assets/alwan-logo.png'
const NavBar = ({ }) => {

    return (
        <Router>
            <div className="container">
                <ul className="list">
                    <li>
                        <Link to='/home' style={{ textDecoration: 'none', color: '#6a6a6a'}}>ACCEUIL</Link>
                    </li>
                    <li>
                        <Link to='/products' style={linkStyle}>PRODUITS</Link>
                    </li>
                    <li>
                        <Link to='/news-paper' style={linkStyle}>JOURNAL</Link>
                    </li>
                    <img src={logo} />
                    <li>
                        <Link to='/about-us' style={linkStyle}>A PROPOS</Link>
                    </li>
                    <li>
                        <Link to='/contact-us' style={linkStyle}>CONTACT</Link>
                    </li>
                    <li>
                        <Link to='/FAQ' style={linkStyle}>FAQ</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

const linkStyle = {
    color: '#6a6a6a',
    textDecoration: 'none',
    fontFamily: 'Times New Roman'
}
export default NavBar