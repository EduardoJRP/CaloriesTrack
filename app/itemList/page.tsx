'use client';

import NavBar from '../components/NavBar';
import ItemList from '../components/ItemList';

export default function AddItem() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-grow items-center justify-center w-full">
        <ItemList></ItemList>
      </div>
    </div>
  );
}