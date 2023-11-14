import Navigation from "../Navigation";
import MobileNav from "../MobileNav";
import './index.css'

function Header () {
    return (
        <header className='header'>
            <img src="../../public/Avatar.png" alt="pfp" />
            <Navigation />
            <MobileNav />
        </header>
    )
}

export default Header;