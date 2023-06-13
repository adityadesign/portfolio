import Hero from './Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About(){
    return (
        <div className='aboutSection'>
            <div className='aboutTextSection'>
                <h2>About me</h2>
                <p>I am a passionate Frontend developer and have a desire of continuous learning, unlearning and creating new things. With my skills and experience, I build dynamic and responsive websites using React JS that provide users with intuitive and seamless experiences. Let's collaborate and create something amazing!</p>
            </div>
            <div className='aboutSkillSection'>
                <h2>Skills</h2>
                <ul className='skillList'>
                    <li className='skill'>
                        <FontAwesomeIcon className='icons' icon={faHtml5} style={{color: "#f06529",}} />
                        <span>HTML</span>
                    </li>
                    <li className='skill'>
                        <FontAwesomeIcon className='icons' icon={faCss3Alt} style={{color: "#2965f1",}} />
                        <span>CSS</span>
                    </li>
                    <li className='skill'>
                        <FontAwesomeIcon className='icons' icon={faJs} style={{color: "#F0DB4F",}} />
                        <span>JavaScript</span>
                    </li>
                    <li className='skill'>
                        <FontAwesomeIcon className='icons' icon={faReact} style={{color: "#61DBFB",}} />
                        <span>React</span>
                    </li>
                    <li className='skill'>
                        <FontAwesomeIcon className='icons' icon={faGithub} style={{color: "#e8eaea",}} />
                        <span>Git</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}