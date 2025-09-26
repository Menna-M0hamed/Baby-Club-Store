import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from "./Nav";
import ProductList from "./ProductList";
import Hero from './Hero';
import Footer from './Footer';
import Data from './Data'
import Categories from './Categories';

const allCategories = ['All', ... new Set (Data.map((item) => item.category)) ];

function App() {

  const [menuItems, setMenuItems] = useState(Data);
  const [theCategories, setTheCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(Data);
      return;
    }
    const newItems = Data.filter((item => item.category === category));
    setMenuItems(newItems)
  };
  

  return (
    <>
      <Nav/>
      <Hero/>
      <div style={{height: '60px'}}></div>
      <Categories filterItems = {filterItems} theCategories = {theCategories}/>
      <ProductList Data={menuItems}/>
      <Footer/>
    </>
  )
}

export default App
