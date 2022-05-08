import React, { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

const BsNavLink = props => {
    const { href, title } = props;
    return (
        <Link href={href}>
            <a className='nav-link port-navbar-link'>{title}</a>
        </Link>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='navContainer'>
            <div className='left'>
                <Navbar
                    className='port-navbar port-default absolute'
                    color='faded'
                    expand='false'
                    fixed='top'
                    light>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='me-auto ' navbar>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink href='/' title='Home' />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink href='/about' title='About' />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink href='/portfolio' title='Portfolio' />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink href='/blog' title='Blog' />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink href='/cv' title='Cv' />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div className='right'>
                <div className='logo'>
                    <NavbarBrand>
                        <Link href='/'>
                            <h1 className='port-navbar-brand'>Harry Yates</h1>
                        </Link>
                    </NavbarBrand>
                </div>
            </div>
        </div>
    );
};

export default Header;
