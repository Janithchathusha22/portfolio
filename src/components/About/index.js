import 'index.scss'
import AnimatedLetters from '../AnimatedLetters'
const About = () => {

    const [letterClass] = useState('text-animate')
    useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                      strArray={['A','b','o','u','t']}
                      indx={15}
                    />
                </h1>
                <p> am an enthusiastic person who is self-motivated and capable of
                    handling any responsibility under a creative, dynamic and
                    professional working environment. I am eager for new
                    technologies and skills as a Fast Learner, to enhance my future
                     career</p>

                  <p>I am interested in UI/UX Designer
                  internship at your company I have always enjoyed working with people and think my dedication and
                   commitment will allow me to work as a part of your organization and be
                   an effective member of your staff.</p> 

            </div>

            
        </div>
    )
}

export default About