import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact(){
    return (
        <div className="contactsSection">
            <h2>Contacts</h2>
            <p>Please reach out if you have any questions! Send me an email at</p>
            <p>aditya.s.acharya3@gmail.com</p>
            <div className='contactLogos'>
                <a href="https://www.linkedin.com/in/aditya-s-acharya-53b0601b4"><FontAwesomeIcon className='contactIcon' icon={faLinkedin} style={{color: "#171515",}} /> </a>
                <a href="https://www.instagram.com/_aditya.acharya/"><FontAwesomeIcon className='contactIcon' icon={faInstagram} style={{color: "#171515",}} /></a>
                <a href="https://twitter.com/Aditya6609"><FontAwesomeIcon className='contactIcon' icon={faTwitter} style={{color: "#171515",}} /></a>       
            </div>
        </div>
    )
}