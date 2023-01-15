import React from 'react';
import Card from './Card';

function SearchList({ filteredPincodes }) {
  console.log("filteredPincodes: ", filteredPincodes);
  return (
    <div>
       <h1>Your Search Results:</h1>
      {filteredPincodes.map(item =>  <Card key={item._id} item={item} />)}
    </div>
  );
}

export default SearchList;