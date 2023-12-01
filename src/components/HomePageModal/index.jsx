import './index.css';
import LinkedInIcon from '../../assets/LinkedIn-icon.jpg';
import GithubIcon from '../../assets/Github-Icon.png';
import GmailIcon from '../../assets/gmail-icon.png';

function HomePageModal() {
    return (
        <div>
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
                    <img src={LinkedInIcon} alt="LinkedIn" />
                    <p>LinkedIn</p>
                </div>
                <div className='icon'>
                    <img src={GithubIcon} alt="github" />
                    <p>GitHub</p>
                </div>
                <div className='icon'>
                    <img src={GmailIcon} alt="gmail" />
                    <p>Gmail</p>
                </div>
            </div>
        </div>

    )
}

export default HomePageModal;