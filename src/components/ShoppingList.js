import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterName, setFilterName] = useState("")
  const [itemList, setItemList] = useState(items)

  function handleFilterName (e) {
    setFilterName(() => e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onSearchChange={handleFilterName} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
