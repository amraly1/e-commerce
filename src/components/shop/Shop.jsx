import React from "react";
import styles from "./Shop.module.css";
import ShopHeader from "./pages/ShopHeader";
import ProductsList from "./pages/ProductsList";
function Shop({ searchInput, productsList, handleSearch }) {
  return (
    <>
      <ShopHeader searchInput={searchInput} handleSearch={handleSearch} />
      <ProductsList productsList={productsList} />
    </>
  );
}

export default Shop;
