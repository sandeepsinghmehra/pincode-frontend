import React from 'react';

function Card({item}) {
  console.log(item);
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{item.village_name}</h2>
        <p>{item.pincode}</p>
      </div>
    </div>
  );
}

export default Card;