import { useState } from 'react';
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [statusTampil, setStatusTampil] = useState('tampil')
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
             <a href="">Jeremia Arfianto</a>  
        </div>
          <button><FaBars /></button>
        <div className={`menu ${statusTampil}`}>
            <ul>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar