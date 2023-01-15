import React from 'react';
import Card from './Card';

function SearchList({ filteredPincodes }) {
  console.log("filteredPincodes: ", filteredPincodes);
  return (
    <div>
      {filteredPincodes.map(item =>  <Card key={item._id} item={item} />)}
    </div>
  );
}

export default SearchList;