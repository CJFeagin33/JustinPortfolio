import Navigation from "../Navigation";
import MobileNav from "../MobileNav";
import AvatarImage from '../../assets/Avatar.png';
import './index.css';

function Header () {
    return (
        <header className='header'>
            <img src={AvatarImage} alt="pfp" />
            <Navigation />
            <MobileNav />
        </header>
    )
}

export default Header;