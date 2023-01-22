import React from 'react'
import react from '../assets/react.svg'

function Header() {
  return (
  <header className='bg-color'>
    <nav className="container set-container">
        <div className="nav-logo">
            <img src={react} alt="web logo" />
        </div>
        <div className="nav_title">
            <h1>nav title</h1>
        </div>
        <div className="nav-linkstate">
            <ul className='container'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
            </ul>
        </div>
    </nav>
  </header>
  )
}

export default Header