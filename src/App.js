import React, { useState } from 'react';
import Sizes from './Sizes';
import './App.css';
//import Addcard from './Addcard';
import Property from './Property';
import Cardsvg
 from './Cardsvg';


const cloths = [
  { id: 1, imgs: "img01.jpg", Name: "Formal Shirt", cost: 899, size: "M" },
  { id: 2, imgs: "img02.png", Name: "Formal Shirt", cost: 700, size: "L" },
  { id: 3, imgs: "img03.png", Name: "Pant", cost: 999, size: "XXL" },
  { id: 4, imgs: "img04.png", Name: "Pant", cost: 999, size: "XL" },
  { id: 5, imgs: "img05.png", Name: "T-shirt", cost: 499, size: "XS" },
  { id: 6, imgs: "img06.png", Name: "Chudidhar", cost: 800, size: "S" },
  { id: 7, imgs: "img07.png", Name: "Chudidhar", cost: 1200, size: "L" },
  { id: 8, imgs: "img08.png", Name: "Ladies Shirt", cost: 600, size: "M" },
  { id: 9, imgs: "img09.png", Name: "Frock", cost: 600, size: "M" },
  { id: 10, imgs: "img10.png", Name: "T-shirt", cost: 599, size: "S" }
];

function App() {
  const [filteredCloths, setFilteredCloths] = useState(cloths);
  const [count,setCount]=useState(0)

  const filterBySize = (size) => {
    const newCloths = cloths.filter(cloth => cloth.size === size);
    setFilteredCloths(newCloths);
  };

  const allSize = () => {
    setFilteredCloths(cloths);
  };
  const countingcart= () => {
    setCount(count+1)
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Clothing Store</h1>
        <button className="relative">
      <Cardsvg />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">{count}</span>
    </button>
      </header>
      <Sizes filterBySize={filterBySize} allSize={allSize} />
      <Property cloths={filteredCloths} countingcart={countingcart} />
    </div>
  );
}

export default App;
