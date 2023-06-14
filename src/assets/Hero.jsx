import { Link as ScrollLink } from 'react-scroll';
export default function Hero(){
    return (
        <div className="hero">
            <h1>Hey, <span className="nameText">I&apos;m Aditya</span></h1>
            <p>A Front-end developer</p>
            <div className="buttons">
                <ScrollLink
                    to='targetAbout'
                    smooth={true}>
                    <button>About</button>
                </ScrollLink>
                <ScrollLink
                    to='targetProjects'
                    smooth={true}>
                    <button>Projects</button>
                </ScrollLink>
                <ScrollLink
                    to='targetContacts'
                    smooth={true}>
                    <button>Contacts</button>
                </ScrollLink>
            </div>
        </div>
    )
}