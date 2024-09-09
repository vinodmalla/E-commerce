import React from 'react';
import Properties from './Properties';

function Property({ cloths ,countingcart }) {
  if (!cloths || !Array.isArray(cloths)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cloths.map(i => (
        <Properties key={i.id} imgs={i.imgs} Name={i.Name} cost={i.cost} size={i.size}  countingcart={countingcart}/>
      ))}
    </div>
  );
}

export default Property;
