import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon ball']);

    const handleAdd = () =>{
        setcategories([...categories, 'Pokemon']);
    };
  return (
      <>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setCategories = {setcategories}/>

        <ol>
            {categories.map( category =>{
                return <GifGrid 
                            category={category}
                            key={category}
                        />
            })}
        </ol>
      </>
  );
};
