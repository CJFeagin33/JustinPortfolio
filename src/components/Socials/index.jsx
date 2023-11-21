import React from 'react';
import './index.css';

import ProfilePicture from '../../assets/ProfilePicture.jpg';
import LinkedInIcon from '../../assets/LinkedIn-icon.jpg';
import GithubIcon from '../../assets/Github-Icon.png';
import GmailIcon from '../../assets/gmail-icon.png';

function Socials() {
    return (
        <div className='social-container'>
            <div>
                <div className='icon'>
                    <img src={ProfilePicture} alt="resume" />
                    <p>Resume</p>
                </div>
                <div className='icon'>
                    <img src={LinkedInIcon} alt="LinkedIn" />
                    <p>LinkedIn</p>
                </div>
            </div>

            <div>
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
    );
}

export default Socials;