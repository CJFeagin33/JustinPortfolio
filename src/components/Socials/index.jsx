import './index.css'

function Socials() {
    return (
        <div className='social-container'>
            <div>
                <div className='icon'>
                    <img src="../../public/ProfilePicture.jpg" alt="resume" />
                    <p>Resume</p>
                </div>
                <div className='icon'>
                    <img src="../../public/LinkedIn-icon.jpg" alt="LinkedIn" />
                    <p>LinkedIn</p>
                </div>
            </div>

            <div>
                <div className='icon'>
                    <img src="../../public/github-icon.jpg" alt="github" />
                    <p>GitHub</p>
                </div>
                <div className='icon'>
                    <img src="../../public/gmail-icon.png" alt="gmail" />
                    <p>Gmail</p>
                </div>
            </div>
        </div>

    );
}

export default Socials;