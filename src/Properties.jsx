import React from 'react';

function Properties({ imgs, Name, cost, size,countingcart }) {


  return (
    <div className="border p-4 m-2">
      <img src={imgs} alt={Name} className="w-full h-auto" />
      <h2 className="text-xl font-bold">{Name}</h2>
      <p>Cost: {cost}</p>
      <p>Size: {size}</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={countingcart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Properties;
