import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 40%;
    height: 250px;
    border: 1px solid #ccc;
    margin: 10px auto;
    padding: 10px;
    p {
      padding-left: 20px;
    }
    p span:first-child{
      font-size: 18px;
      font-weight: bold;
      color: gray;
    }
    p span:last-child{
      font-weight: bold;
      color: purple;
    }
    .pincode{
      color: blue !important;
    }
    @media (max-width: 768px) {
      width: 90%;
      height: auto;
`;
function Card({item}) {
  return(
      <StyledCard>
        <p><span>Village Name: </span><span>{item.village_name}</span></p>
        <p><span>Pincode: </span><span className='pincode'>{item.pincode}</span></p>
        <p><span>Post Office Name(B.O, S.O): </span><span>{item.office_name}</span></p>
        <p><span>District Name: </span><span>{item.district_name}</span></p>
        <p><span>Sub District Name: </span><span>{item.sub_distname}</span></p>
        <p><span>State Name: </span><span>{item.state_name}</span></p>
      </StyledCard>
  );
}

export default Card;