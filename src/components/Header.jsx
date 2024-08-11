import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} />
            <h3>Jeremia Arfianto</h3>
            <p>Programmer - Magang - Researcher</p>
            <div className='socialMedia'>
              <a href=""><FaInstagram /></a>
            </div>
        </div>
    </header>
  )
}

export default Header