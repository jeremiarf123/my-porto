import { useState } from 'react';
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [statusTampil, setStatusTampil] = useState('tampil')

  function tampilMenu() {
    if(statusTampil == ''){
      setStatusTampil('tampil')
    }else{
      setStatusTampil('')
    }
  }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
             <a href="">Jeremia Arfianto</a>  
        </div>
          <button onClick={tampilMenu}>
            {
              statusTampil == ''?(<FaBars />):(<IoMdClose />)
            }
            </button>
        <div className={`menu ${statusTampil}`} onClick=
        {tampilMenu}>
            <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar