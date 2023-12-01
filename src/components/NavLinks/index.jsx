import { NavLink } from 'react-router-dom'
import './index.css'

function NavLinks({ closeHamburger, isMobile }) {

    function closeHamburgerMenu () {
        if(isMobile) {
            closeHamburger();
        }
    }
    return (
        <nav className='navLinks'>
            <ul>
                <li>
                    <NavLink to='/' onClick={closeHamburgerMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/aboutMe' onClick={closeHamburgerMenu}>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects' onClick={closeHamburgerMenu}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contactPage' onClick={closeHamburgerMenu}>
                        Contact Me
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks;