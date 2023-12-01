import './index.css';
import LinkedInIcon from '../../assets/LinkedIn-icon.jpg';
import GithubIcon from '../../assets/Github-Icon.png';
import GmailIcon from '../../assets/gmail-icon.png';
import Resume from '../../assets/Resume.png';
import ProfilePicture from '../../assets/ProfilePicture.jpg'

function HomePageModal() {
    return (
        <div className='EntireHomePage'>
            <div className='HomePageModal'>
                <div className="ContentContainer">
                    <div className='TitleContainer'>
                        <h1>
                            Justin
                            <br />
                            Feagin
                        </h1>
                    </div>
                    <div className='ParagraphContainer'>
                        <p>Web Developer</p>
                        <p>HTML, CSS, JavaScript and React</p>
                        <p>Bachelors of Science in Business Administration</p>
                    </div>
                </div>
            </div>
            <div className='ImageLinksContainer'>
                <div className='icon'>
                    <a href="https://www.linkedin.com/in/justin-feagin-66691b225">
                        <img src={LinkedInIcon} alt="LinkedIn" />
                    </a>
                    <p>LinkedIn</p>
                </div>
                <div className='icon'>
                    <a href="https://github.com/CJFeagin33">
                        <img src={GithubIcon} alt="github" />
                    </a>
                    <p>GitHub</p>
                </div>
                <div className='icon'>
                    <a href="mailto:cjfeagin33@gmail.com">
                        <img src={GmailIcon} alt="gmail" />
                    </a>
                    <p>Gmail</p>
                </div>
            </div>
            <div className='ResumeModal'>
                <div>
                    <p>RESUME:</p>
                </div>
                <div className='ResumeModalImages'>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vTBBlBuVWx6qT2lcazi-du8mAkPEVqMS3WVnqqzyW2808gcwf8QiD7RHAc6ci_o7GBEn43HHB7x9ICc/pub">
                        <img src={ProfilePicture} alt="PFP" />
                        <img src={Resume} alt="Resume" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePageModal;