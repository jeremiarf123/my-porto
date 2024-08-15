import '../styles/About.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <h4>Programming Language & Tools</h4>
            <div className="skills">

                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <RiReactjsFill />
                <FaGithub />

            </div>
        </div>
    </section>
  )
}

export default About