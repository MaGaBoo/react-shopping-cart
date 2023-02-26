import React, { useState } from 'react';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import initialProducts from './mocks/initialProducts.json';
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';

const useFilters = () => {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  const filterProducts = (products) => {
    return products.products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  };
  return { filterProducts, setFilters }
};

function App() {
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header
        changeFilters={setFilters} />
      <Products
        products={filteredProducts} />
        { IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
