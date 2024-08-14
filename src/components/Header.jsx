import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
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
              <a href=""><FaLinkedin /></a>
              <a href=""><SiGmail /></a>
            </div>
        </div>
    </header>
  )
}

export default Header