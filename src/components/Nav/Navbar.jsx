import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    .logo {
        padding: 15px 0;
    }
    .anchor{
        display: flex;
        align-items: center;
    }
    .logo_image{
        /* mr-3 sm:h-9 */
        object-fit: cover;
        height: 30px;
    }
    .logo_heading{
        /*  dark:text-white */
        align-self: center;
        font-size: x-large;
        font-weight: bold;
        white-space: nowrap;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <Link to={'/'} className={"anchor"}>
                    <image src="/logo.jpg" className={"logo_image"} alt="Logo" width={72} height={16} />
                    <span className={"logo_heading"}>Pincode India</span>
                </Link>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar;