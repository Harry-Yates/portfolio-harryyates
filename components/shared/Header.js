import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const LoginLink = () => (
    <Link href='/api/v1/login'>
        <a className='nav-link port-navbar-link clickable login'>Login</a>
    </Link>
);

const LogoutLink = () => (
    <Link href='/'>
        <a className='nav-link port-navbar-link clickable login'>Logout</a>
    </Link>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='NavbarItems'>
            <div className='containerLeft'>
                <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
                    <i>{isOpen ? <FaTimes /> : <FaBars />}</i>
                </div>
                <ul className={!isOpen ? "nav-menu-active" : "nav-menu"}>
                    <li>
                        <Link href='/'>
                            <a className='nav-links'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a className='nav-links'>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/portfolio'>
                            <a className='nav-links'>Portfolio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'>
                            <a className='nav-links'>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/cv'>
                            <a className='nav-links'>CV</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='containerCenter'>
                <Link href='/'>
                    <h1 className='navbar-logo'>Harry Yates</h1>
                </Link>
            </div>
            <div className='containerRight'>
                <LoginLink />
                <LogoutLink />
            </div>
        </nav>
    );
};

export default Header;
