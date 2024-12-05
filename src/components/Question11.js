import React from 'react';

const ItemList = () => {
  // Array of items
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Orange' },
    { id: 5, name: 'Blueberry' },
  ];

  return (
    <div>
      <b>Fruits List</b>
      <ul>
        {/* Map through the items and render each one with a unique key */}
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
