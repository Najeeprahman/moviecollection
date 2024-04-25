
import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

function App() {
  const [items, setItems] = useState(['Pursuit of Happiness', 'Shawshank Redemption', 'Mankatha']);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="app">
      <h1>My Movie Collection</h1> 
      <ItemList items={items} className="item-list" />
      <AddItemForm onAdd={addItem} />
    </div>
  );
}

export default App;
