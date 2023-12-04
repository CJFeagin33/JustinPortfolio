import './index.css'
import ProfilePicture from '../../assets/ProfilePicture.jpg'

function AboutMe() {
    return (
        <div className='EntireAboutMePage'>
            <div className='aboutMe'>
                <h1>About Me:</h1>
                <img src={ProfilePicture} alt="PFP" />
                <p>
                    I am a budding Web Developer with a Bachelors of Science Degree in Management from Clemson University, South Carolina. 
                </p>
                    <br />
                <p>I have recently earned a certificate in full stack development from University of California San Diego. In this program I developed skills in JavaScript, CSS, HTML, React.js, and more.</p>
                    <br />
                <p>
                    I used to be in the sales industry but ended up moving to California to try and break into a new industry. I am very passionate about computers, programming, and web development. I am also passionate about gaming, and it is my hope to one day break into the gaming industry as a developer of some sort.
                </p>
                <br />
                <p>If you would like to reach out to me for employment or collaborative purposes, please visit my Contact Me section on this Portfolio!</p>
            </div>
        </div>


    )
}

export default AboutMe;