import React from "react";
import ProductsCard from "./ProductsCard";
import styles from "./ProductsList.module.css";
function ProductsList({ productsList }) {
  return (
    <div>
      <div className={styles["all-products"]}>
        {productsList.map((prod) => (
          <ProductsCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
