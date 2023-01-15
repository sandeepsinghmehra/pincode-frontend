import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
        padding: 5px 20px;
    }
    a {
        color: #fff;
        text-decoration: none; 
    }
    @media (max-width: 768px) {
        margin-top: 0px;
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
        color: #fff;
        }
        a {
            color: #fff;
            text-decoration: none; 
        }
    }
`;

const RightNav = ({ open, setOpen }) => {
    return (
        <Ul open={open} onClick={() => setOpen(!open)}>
            <li>
                    <Link to={'/'}>Home</Link>
                </li>
            <li> 
                <Link to={'/about'}>About Us </Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact Us</Link></li>
        </Ul>
    )
}

export default RightNav;