import Project1 from '../Images/MultiStepForm.png'
import Project2 from '../Images/CRUD.png'
import Project3 from '../Images/SwiftCart.png'
import Project4 from '../Images/FindYourFilm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects(){
    return (
        <div className="projectSection">
            <h2>Projects</h2>
            <p>All my projects include links to the code and live version.</p>
            <div className="projectCards">
                <div className="individualCard">
                    <a href="https://silver-lamington-5c84f9.netlify.app">
                        <img className='projectImg' src={Project3} />
                    </a>
                    <a href="https://github.com/adityadesign/SwiftCart--v2.git">
                            <FontAwesomeIcon className='projectGit' icon={faGithub} style={{color: "#171515",}} />  
                    </a>
                    <h3>E Commerce Website</h3>
                    <p>Implemented and deployed a responsive website using ReactJS. Integrated StoreAPI to enable users to search products through categories.</p>
                </div>
                <div className="individualCard">
                    <a href="https://cerulean-blancmange-275383.netlify.app">
                        <img className='projectImg' src={Project2} />
                    </a>
                    <a href="https://github.com/adityadesign/CRUD.git">
                            <FontAwesomeIcon className='projectGit' icon={faGithub} style={{color: "#171515",}} />  
                    </a>
                    <h3>CRUD</h3>
                    <p>Developed a CRUD website using ReactJS and Redux for state management. Also integrated MockAPI to read, display, edit and delete a user data.</p>
                </div>
                <div className="individualCard">
                    <a href="https://bucolic-sunflower-5b597f.netlify.app/">
                        <img className='projectImg' src={Project1} />
                    </a>
                    <a href="https://github.com/adityadesign/MultiStepForm.git">
                            <FontAwesomeIcon className='projectGit' icon={faGithub} style={{color: "#171515",}} />  
                    </a>
                    <h3>Multi-Step Form</h3>
                    <p>It&apos;s a form where it takes the user&apos;s data for subscribing a specified order. After filling, user are able to see
                    a summary of their selections on the final step and confirm their order.
                    </p>
                </div>
                <div className="individualCard">
                    <a href="https://dulcet-bubblegum-a2c7c3.netlify.app/">
                        <img className='projectImg' src={Project4} />
                    </a>
                    <a href="https://github.com/adityadesign/Movie-Watchlist---v2.git">
                            <FontAwesomeIcon className='projectGit' icon={faGithub} style={{color: "#171515",}} />  
                    </a>
                    <h3>Movie Watchlist</h3>
                    <p>You can seach any movies here and add or remove it to your watchlist which is saved in LocalStorage.</p>
                </div>
            </div>
        </div>
    )
}