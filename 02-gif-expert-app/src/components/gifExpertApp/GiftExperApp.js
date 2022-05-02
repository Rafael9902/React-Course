import React, { useState } from 'react'
import { AddCategory } from '../addCategory/AddCategory';
import { GifsGrid } from '../gifsGrid/GifsGrid';

export const GiftExperApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <div>
        <h2>GiftExperApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />
        <ol>
          {categories.map(category => <GifsGrid key={category} category={category}/>)}
        </ol>
        {/* <ol>
          { categories.map((category, i) => <li key={category}>{category}</li>) }
        </ol> */}
    </div>
  )
}
