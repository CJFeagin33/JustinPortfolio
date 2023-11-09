import Navigation from "../Navigation";
import MobileNav from "../MobileNav";
import './index.css'

function Header () {
    return (
        <header className='header'>
            <img src="../../public/ProfilePicture.jpg" alt="pfp" />
            <Navigation />
            <MobileNav />
        </header>
    )
}

export default Header;