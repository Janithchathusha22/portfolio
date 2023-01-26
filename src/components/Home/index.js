import {  useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'

import './index.scss'

const Home = () => {
  const [letterClass] = useState('text-animate')

  const nameArray = [ 'h', 'a', 't', 'h', 'u', 's','h','a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
    '',
    'UI',
    '',
    'd',
    'e',
    's',
    'i',
    'n',
    'g',
    'er',
    '.',


  ]

   //useEffect(() => {
    //return setTimeout(() => {
      //setLetterClass('text-animate-hover')
    //}, 4000)
  //}, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript,React/ UI desinger/ photographer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo/>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
