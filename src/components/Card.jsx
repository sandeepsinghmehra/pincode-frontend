import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #fff;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;
function Card({item}) {
  return(
    <div>
      <div>
        <p><span>Village Name: </span><span>{item.village_name}</span></p>
        <p><span>Pincode: </span><span>{item.pincode}</span></p>
        <p><span>Post Office Name(B.O, S.O): </span><span>{item.office_name}</span></p>
        <p><span>State Name: </span><span>{item.state_name}</span></p>
        <p><span>District Name: </span><span>{item.district_name}</span></p>
        <p><span>Sub District Name: </span><span>{item.sub_distname}</span></p>
      </div>
    </div>
  );
}

export default Card;