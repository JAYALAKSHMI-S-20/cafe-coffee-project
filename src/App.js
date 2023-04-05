import { useState } from "react";
import React from 'react';
import Menu from "./components/Menu";
import Home from './components/Home';
import About from "./components/About";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Rating from "./components/Rating";
export default function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <div>
    <marquee behaviour="scroll" direction="right">
    <h1>Cafe Coffee day</h1>
    </marquee>
    <img src=""></img>
    <BrowserRouter>
     <h1><Link to="/home">Home|</Link>
     <Link to="/about">  About|</Link>
     <Link to="/menu">  Menu & Orders|</Link>
     <Link to="/rating">  Rating</Link></h1>
     <Routes>
     <Route path="/Home" element={<Home/>}></Route>
     <Route path="/About" element={<About/>}></Route>
     <Route path="/Menu" element={<Menu/>}></Route>
     <Route path="/Rating" element={<Rating/>}></Route>
     </Routes>
    </BrowserRouter>
    <div style={{textAlign:"center"}}>
      <h2>Shopping List</h2>
        <h2>Items To Buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          /><br></br><br></br>
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
      
    </div>
  );
}
function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>Remove</button>
    </li>
  );
}

