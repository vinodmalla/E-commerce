import React from 'react';

function Sizes({ filterBySize, allSize }) {
  return (
    <div className="flex flex-wrap mb-4">
      <h4 className="w-full text-lg font-bold mb-2">Sizes</h4>
      <button className="m-2 bg-neutral-400 rounded-md py-1 px-3" onClick={allSize}>All Sizes</button>
      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
        <button
          key={size}
          className="m-2 bg-neutral-400 rounded-md py-1 px-3"
          onClick={() => filterBySize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default Sizes;
