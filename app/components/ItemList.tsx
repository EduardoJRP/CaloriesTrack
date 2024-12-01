import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

interface ItemData {
  name: string;
  quantity: number;
  calories: number;
  carbohydrates: number;
  fats: number;
  proteins: number;
}

export default function ItemList() {
  const [items, setItems] = useState<ItemData[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('/api/submitForm');
        const data = await response.json();
        if (data.success) {
          setItems(data.data);
        } else {
          console.error(`Error fetching items: ${data.error}`);
        }
      } catch (error) {
        console.error(`Network error: ${error}`);
      }
    }
    fetchItems();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          name={item.name}
          quantity={item.quantity}
          calories={item.calories}
          carbohydrates={item.carbohydrates}
          proteins={item.proteins}
          fats={item.fats}
        />
      ))}
    </div>
  );
}