import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/categories');
      setCategories(data);
    };

    fetchProduct();
  }, []);
  console.log(categories);
  return (
    <>
      {categories.map((category) => (
        <h1 key={category.id}>{category.title}</h1>
      ))}
    </>
  );
};

export default CategoriesScreen;
