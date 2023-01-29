import { useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass] = useState('text-animate')

 // useEffect(() => {
   // return setTimeout(() => {
     // setLetterClass('text-animate-hover')
   // }, 3000)
 // }, [])

  return (
    <>
      <div className="container about-page">
     
        < Loader type="pacman"/>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am an enthusiastic person who is self-motivated and capable of
          handling any responsibility under a creative, dynamic and
          professional working environment. I am eager for new
          technologies and skills as a Fast Learner, to enhance my future
          career.
          </p>
          <p align="LEFT">
          I have always enjoyed working with people and think my dedication and
          commitment will allow me to work as a part of your organization and be
          an effective member of your staff.
          </p>
          <p>
          A passionate Full Stack Software Developer 🚀
         having an experience of building Web and Mobile applications with JavaScript / ReactJS / NodeJS / Flutter and some other cool libraries and frameworks
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
