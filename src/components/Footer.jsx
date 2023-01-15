import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import CopyRight from "./CopyRight";
   
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
    background: #0D2538; 
`
    
const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;
    
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 20px;
        
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;
    
const FooterLink = styled.div`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
        
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;
    
const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;
  
const Footer = () => {
    return (
        <Container>
            <Row>
            <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
                <FooterLink href="#">Internships</FooterLink>
                <FooterLink href="#">Coding</FooterLink>
                <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
                <Heading>Legal</Heading>
                <FooterLink>
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </FooterLink>
                <FooterLink>
                    <Link to={"/term-condition"}>Terms &amp; Conditions</Link>
                </FooterLink>
            </Column>
            <Column>
                <Heading>Follow us</Heading>
                <FooterLink>
                    Github
                </FooterLink>
                <FooterLink>
                    Discord
                </FooterLink>
            </Column>
            </Row>
            <CopyRight />
        </Container>
    );
};
export default Footer;